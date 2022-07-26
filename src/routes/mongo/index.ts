import clientPromise from '$lib/mongodb-client';
import type { MongoClient } from 'mongodb';

let serverResponse;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const client = await clientPromise;
	const db = client.db('Books');
	const collection = db.collection('Books');
	
	//Authors note: If you want the page to be able to render the results of your DB, you might wanna
	//use an await, to give your server a chance to respond before you immediately render {}.
	let serverResponse = await collection.find({ pageCount: { $gt: 1100 } }).toArray();
	
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*',
			'Content-Type': 'application/json'
		},
		body: {serverResponse}
	};
}
console.log("SR: " + serverResponse)
export default serverResponse;


export async function POST() {
	const dbConnection = await clientPromise;
	const db = dbConnection.db();
	const collection = db.collection('Books');
	console.log(collection);
	//const todo = JSON.parse(event);
	//const newTodo = await collection.insertOne(todo);
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			POST: 'POST'
		}
	};
}

export async function PATCH() {
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			PATCH: 'PATCH'
		}
	};
}

export async function DELETE() {
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			DELETE: 'DELETE'
		}
	};
}
