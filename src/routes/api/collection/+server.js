import { prisma } from '../../../lib/server/prisma';

export async function POST({ request, cookies }) {
	const { collectionID } = await request.json();

	const session = cookies.get('session');

	if (!session) {
		return new Response({ body: 'Unauthorized' }, { status: 401 });
	}

	const user = await prisma.user.findUnique({
		where: { session }
	});
	console.log('🚀 ~ POST ~ user:', user);

	const collection = await prisma.collection.findUnique({
		where: {
			userId: user?.id,
			id: collectionID
		},
		include: {
			words: true
		}
	});
	console.log('🚀 ~ POST ~ collection:', collection);

	return new Response(JSON.stringify(collection), {
		status: 201
	});
}
