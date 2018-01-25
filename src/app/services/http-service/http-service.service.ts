import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService
{
	private headers: Headers;
	public constructor(private http: Http) 
	{ 

	}

	public convertToQueryString(data: any): string
	{
		let params 									   	= new URLSearchParams();
		for(let key in data) {
			if (data[key].constructor == Array) {
				for (var i = data[key].length - 1; i >= 0; i--) {
					params.append(key,data[key][i]);
				}
			}
			else {
				params.set(key, data[key]); 
			}
		}
		return params.toString();
	}

	public setHeaders(headers?: Array<{name: string, value: string}>)
	{
		return new Promise((resolve,reject) => 
		{
			if (headers.length < 1) {
				return reject("Error: no headers to set.");
			}

			for (var i = 0; i < headers.length; i++) {
				this.headers.append(headers[i].name,headers[i].value);
				if (i === headers.length - 1) {
					return resolve(`Success: ${headers.length} headers set`);
				}
			}
		});	
	}

	public removeHeader(key: string)
	{
		this.headers.delete(key);
	}

	public resetHeaders()
	{
		this.headers									= null;
	}

	public get(url: string): Promise<any>
	{
		return this.http.get(url,{headers: this.headers}).toPromise();
	}

	public post(url: string, data: any = ''): Promise<any>
	{
		return this.http.post(url,data,{headers: this.headers}).toPromise();
	}

}
