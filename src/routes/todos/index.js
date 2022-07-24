/** @type {import('@sveltejs/kit').RequestHandler} */

export async function GET() {
    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        'GET':'GET'
      }
    };
};

export async function POST() {
    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        'Post':'Post'
      }
    };
};

export async function PATCH() {
    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        'PUSH':'PUSH'
      }
    };
};

export async function DELETE() {
    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        'DELETE':'DELETE'
      }
    };
};
