INSERT INTO departments(name)
  VALUES
  ('HR'),
  ('Office'),
  ('Warehouse');

INSERT INTO roles(title, description, salary, department_id)
  VALUES
  ('HR_Manager','facuiltates employment for regular bussiness operations', 3000, 1),
  ('Recruiter','finds high quality candidates for busssiness growth and operations', 2500, 1),
  ('general manger', 'manages operations with daily routines and processes for bussiness growth', 4500, 2),
  ('Sales_personnel','makes sales of product to meet quaterly numbers', 2400, 2),
  ('Warehouse_Manger', "monitors and faculitate operations within the warehouse", 2600, 3),
  ('fork_lift_operator','provides expidited operation for the receiving and shipment of product', 2300, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
  ('Ron', 'beuger', 3, NULL),
  ('Bob', 'Bill', 4, 1),
  ('Hank', 'Gromer', 5, 1),
  ('bill', 'miles', 6, 3);