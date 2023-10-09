interface IClientIdAndSecret {
	clientId: string;
	clientSecret: string;
}
declare class OpenAuth {
	generateClientIdAndSecret(secret: string): IClientIdAndSecret;

	verifyClient(
		clientId: string,
		clientSecret: string,
		secret: string
	): string | Error;

	verifyToken(token: string, secret: string): boolean;
}

export = OpenAuth;
