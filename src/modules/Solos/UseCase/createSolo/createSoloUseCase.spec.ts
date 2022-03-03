import { app } from '../../../../shared/infra/http/app'
import supertest from 'supertest'
import { getConnection } from 'typeorm'

import CreateConnection from '../../../../shared/infra/typeORM'

describe('[POST] - Solo', () => {
    beforeAll(async()=>{
        await CreateConnection()
    })
    beforeEach(async () => {
        await getConnection('test').undoLastMigration()
        await getConnection('test').runMigrations()
    })
    afterAll(async () => {
        await getConnection().close()
    })
    it('should be able to create "solo"', async () => {
        const solo = {
            tipo: "Icapuí G15",
            transm_solo: 0.87,
            capacidade: 7.70,
            ponto_murcha: 3.5,
            densidade_ap: 1.00,
            disp_total: 0.40
        }
        const resp=await supertest(app)
            .post('/solos')
            .send({
                tipo: "Icapuí G15",
                transm_solo: 0.87,
                capacidade: 7.70,
                ponto_murcha: 3.5,
                densidade_ap: 1.00,
                disp_total: 0.40
            })
        console.log(resp)

    })
})