const request = require('supertest');
const app = require('./api');

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});

test('GET /tasks/:id returns a specific task', async () => {
    const response = await request(app).get('/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body.title == 'Task 1').toBe(true);
});

test('POST /tasks creates a new task', async () => {
    const response = await request(app).post('/tasks').send({ id: 3, title: 'Task 3', description: 'desk' });
    expect(response.status).toBe(201);
    expect(response.body.title == 'Task 3').toBe(true);
});

test('PUT /tasks/:id updates a task', async () => {
    const response = await request(app).put('/tasks/3').send({ id: 3, title: 'Task 3', description: 'Task 3 updated' });
    expect(response.status).toBe(200);
    expect(response.body.description == 'Task 3 updated').toBe(true);
});

test('DELETE /tasks/:id deletes a task', async () => {
    const response = await request(app).delete('/tasks/3');
    expect(response.status).toBe(204);
});