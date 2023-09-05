use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- setup each role with their salary and id
-- INSERT INTO role
--     (title, salary, department_id)
-- VALUES
--     ('Sales Lead', 100000, 1),
--     ('Salesperson',80000, 2),
--     ('Lead Engineer',150000, 3),
--     ('Sofware Engineer',120000, 4),
--     ('Account Manager',160000, 5),
--     ('Accountant',125000, 6),
--     ('Legal Team Lead',250000, 7),
--     ('Lawyer',190000, 8),

-- setup each employee with their name, role_id and Manager ID
-- INSERT INTO role
--     (fname, lname, role_id, manager_id)
-- VALUES
--     ('John', 'Doe', )