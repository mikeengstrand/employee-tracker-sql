use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- setup each role with their salary and id
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson',80000, 1),
    ('Lead Engineer',150000, 2),
    ('Sofware Engineer',120000, 2),
    ('Account Manager',160000, 3),
    ('Accountant',125000, 3),
    ('Legal Team Lead',250000, 4),
    ('Lawyer',190000, 4);

-- need to think about where we put manager ID - null?
-- setup each employee with their name, role_id and Manager ID
INSERT INTO employee
    (fname, lname, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, null),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriquez', 3, null),
    ('Kevin', 'Tupik', 4, 2),
    ('Kunal', 'Singh', 5, null),
    ('MAlia', 'Brown', 6, 3),
    ('Sarah', 'Lord', 7, null),
    ('Tom', 'Allen', 8, 4);
    