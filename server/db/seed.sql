

-- Seed data for serviceTypes
INSERT INTO serviceTypes (id, name, description, createdAt, updatedAt) VALUES
(1, 'Basic Clean', 'Exterior wash and dry, tire cleaning, and window cleaning', NOW(), NOW()),
(2, 'Full Interior', 'Deep cleaning of seats, carpets, and interior surfaces', NOW(), NOW()),
(3, 'Full Interior and Basic Exterior', 'Full interior cleaning plus exterior wash and dry', NOW(), NOW());



-- Seed data for prices
INSERT INTO prices (serviceTypeId, vehicleType, basePrice, multiplier, createdAt, updatedAt) VALUES
-- Basic Clean prices
(1, 'Compact/Smallcar', 60, 1, NOW(), NOW()),
(1, 'Sedan/Midsize', 70, 1, NOW(), NOW()),
(1, 'SUV/Truck', 80, 1, NOW(), NOW()),

-- Full Interior prices
(2, 'Compact/Smallcar', 90, 1, NOW(), NOW()),
(2, 'Sedan/Midsize', 100, 1, NOW(), NOW()),
(2, 'SUV/Truck', 110, 1, NOW(), NOW()),

-- Full Interior and Basic Exterior prices
(3, 'Compact/Smallcar', 125, 1, NOW(), NOW()),
(3, 'Sedan/Midsize', 135, 1, NOW(), NOW()),
(3, 'SUV/Truck', 145, 1, NOW(), NOW());
