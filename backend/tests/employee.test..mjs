import request from 'supertest';
import app from '../app';
describe('Employee API', () => {
  it('should fetch all employees', async () => {
    const response = await request(app).get('/api/employees');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Test pour créer un employé
  it('should create a new employee', async () => {
    const newEmployee = {
      nom: 'Alice',
      prenom: 'Smith',
      poste: 'Manager'
    };

    const response = await request(app).post('/api/employees').send(newEmployee);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nom', 'Alice');
    expect(response.body).toHaveProperty('prenom', 'Smith');
    expect(response.body).toHaveProperty('poste', 'Manager');
  });
});
