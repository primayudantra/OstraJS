import mqtt from 'mqtt';
import kue from 'kue';

var queue = kue.createQueue();

var knex = require('../utils/database');


class MQTT{
	constructor(){
		this.client = mqtt.connect('mqtt://broker.hivemq.com');
		this.message = '';
		this.knex = knex;
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
			obj['created_at'] = knex.fn.now();
			// console.log(obj)
			var x = await knex("channel_test").insert(obj).returning('*').toString();
			// console.log(x)
		})
	}	
}

module.exports = new MQTT();