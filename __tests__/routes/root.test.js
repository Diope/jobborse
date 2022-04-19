const build = require("../../src/index");
let app;
describe('Root route', () => {
  beforeEach(() => {
    app = build()
  })

  afterEach(() => {
    app.close()
  })

  it('Should return 200 when successful', async () => {
    const res = await app.inject({
      url: '/'
    })

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({test: "sanity check"})
  })
})