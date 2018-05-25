import Database from '../utils/database';
import mqtt from 'mqtt';
import kue from 'kue';

var DB = Database.db;

var queue = kue.createQueue();

class MQTT{
	constructor(){
		this.client = mqtt.connect('mqtt://broker.hivemq.com');
		this.message = '';
	}

	subscribe(){
		this.client.on('connect', () => {
		  this.client.subscribe('ness/Sensoriamento/Energia')
		  this.client.subscribe('Home_EL_Temp/Temp_sove')
		})

		this.handler();
	}

	async handler(){
		this.client.on('message', async (topic, message) => {
			var messages = message.toString();
			console.log(messages);
			try{
				await queue.create('channel', {channel_name: topic, channel_content: messages }).save();	
			}catch(e){
				console.log(e)
			}
			await this.store_to_db();
		})
		
	}

	async store_to_db(){
		var obj = {};
		queue.process('channel', 1, async (job, done)=>{
			
			obj = job.data;

			const query = `INSERT INTO channel_test(channel_name, channel_content, created_at) values('${obj.channel_name}', '${obj.channel_content}', CURRENT_TIMESTAMP)`;
			await DB.query(query);
		})
	}	
}

module.exports = new MQTT();