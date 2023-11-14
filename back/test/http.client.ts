import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';

type ReqParams = Record<string, any>
type ParamsWUrl = { url: string } & ReqParams


export class HttpClient {
  constructor(private readonly app: INestApplication) {}

  private getInstance() {
    return supertest(this.app.getHttpServer())
  }

  async raw(opts: ParamsWUrl) {
    let url = `/graphql/${opts.url}`

    const method = (opts.method || "GET").toLowerCase() as "get" | "post"
    const server = this.getInstance()
    const handler = server[method]

    return handler(url)
      .set({
        'Content-Type': 'application/json'
      })
      .send(opts.payload)
  }

  async json<T>(opts: ParamsWUrl): Promise<T> {
    const rep = await this.raw(opts)
    return JSON.parse(rep.text) as T
  }

  async get<T = any>(url: string, opts?: ReqParams) {
    return this.json<T>({ ...opts, url, method: "GET" })
  }

  async post<T = any, P extends object = {}>(url: string, payload?: P, opts?: ReqParams) {
    return this.json<T>({ ...opts, url, method: "POST", payload })
  }
}