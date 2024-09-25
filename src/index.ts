	export interface Env{
		
}
//app.get("/user") what is worry about when we write express code 
//body,header,query parameter..
//this request function here handle everythting
//we dont have to worry about this app.post(),app.get()...... 
//Promise<Respons> this is what fucntion return response object  in genrics ?
//  letts we will get somthinn from datbase so we have to  using async function so it is not returning respone it will returning a promise which returning response 
//this is why 
//in package .json if we write name as another then my app then it will 
//start new worker

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		
		
		if (request.method === "GET") {
			return Response.json({
				message: "fuck you"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};