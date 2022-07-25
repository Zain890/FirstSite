import clientPromise from '$lib/mongodb-client';
import type { MongoClient } from 'mongodb';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const client = await clientPromise;
  const db = client.db("Books");
	const collection = db.collection('Books');
	const books = collection.find({ pageCount: { $gt: 1100 } }).toArray((err, res) => {
		if (err) console.log('err', err);
		console.log('res', res);
	});

  return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
      books
    },
	};
}

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
