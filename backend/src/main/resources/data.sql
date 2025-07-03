DROP TABLE IF EXISTS menu;

CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL,
  image TEXT,
  calorie INTEGER,
  category VARCHAR(100),
  lat DECIMAL,
  lng DECIMAL
);

INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (1, 'spectrograph', 'Quos optio quisquam fuga consequuntur porro illum ratione provident. Totam sunt voluptatem quos distinctio fuga assumenda omnis. Voluptatum cum quos officiis quisquam nobis voluptas sed odio. Deserunt magnam soluta deserunt id fuga.', 914, 'https://loremflickr.com/640/480/food', 65, 'Breakfast', 64.7631, -95.1653);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (2, 'flax', 'Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.', 152, 'https://loremflickr.com/640/480/food', 25, 'Breakfast', 0.5756, 67.289);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (3, 'codepage', 'Vel iusto necessitatibus ipsum. Dicta iste expedita distinctio exercitationem amet. Occaecati sapiente deleniti exercitationem. Impedit labore amet ratione. Doloribus magni veritatis ipsam optio.', 593, 'https://loremflickr.com/640/480/food', 6, 'Drinks', -69.6643, 21.2437);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (4, 'identifier', 'Repudiandae repellendus incidunt molestias iure.', 16, 'https://loremflickr.com/640/480/food', 43, 'Orders', 1.4593, 22.2643);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (5, 'item5', 'Description for item 5.', 105, 'https://loremflickr.com/640/480/food', 5, 'Category0', 10.615, -18.395);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (6, 'item6', 'Description for item 6.', 106, 'https://loremflickr.com/640/480/food', 6, 'Category1', 10.738, -18.074);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (7, 'item7', 'Description for item 7.', 107, 'https://loremflickr.com/640/480/food', 7, 'Category2', 10.861, -17.753);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (8, 'item8', 'Description for item 8.', 108, 'https://loremflickr.com/640/480/food', 8, 'Category3', 10.984, -17.432);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (9, 'item9', 'Description for item 9.', 109, 'https://loremflickr.com/640/480/food', 9, 'Category4', 11.107, -17.111);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (10, 'item10', 'Description for item 10.', 110, 'https://loremflickr.com/640/480/food', 10, 'Category0', 11.23, -16.79);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (11, 'item11', 'Description for item 11.', 111, 'https://loremflickr.com/640/480/food', 11, 'Category1', 11.353, -16.469);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (12, 'item12', 'Description for item 12.', 112, 'https://loremflickr.com/640/480/food', 12, 'Category2', 11.476, -16.148);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (13, 'item13', 'Description for item 13.', 113, 'https://loremflickr.com/640/480/food', 13, 'Category3', 11.599, -15.827);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (14, 'item14', 'Description for item 14.', 114, 'https://loremflickr.com/640/480/food', 14, 'Category4', 11.722, -15.506);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (15, 'item15', 'Description for item 15.', 115, 'https://loremflickr.com/640/480/food', 15, 'Category0', 11.845, -15.185);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (16, 'item16', 'Description for item 16.', 116, 'https://loremflickr.com/640/480/food', 16, 'Category1', 11.968, -14.864);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (17, 'item17', 'Description for item 17.', 117, 'https://loremflickr.com/640/480/food', 17, 'Category2', 12.091, -14.543);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (18, 'item18', 'Description for item 18.', 118, 'https://loremflickr.com/640/480/food', 18, 'Category3', 12.214, -14.222);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (19, 'item19', 'Description for item 19.', 119, 'https://loremflickr.com/640/480/food', 19, 'Category4', 12.337, -13.901);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (20, 'item20', 'Description for item 20.', 120, 'https://loremflickr.com/640/480/food', 20, 'Category0', 12.46, -13.58);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (21, 'item21', 'Description for item 21.', 121, 'https://loremflickr.com/640/480/food', 21, 'Category1', 12.583, -13.259);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (22, 'item22', 'Description for item 22.', 122, 'https://loremflickr.com/640/480/food', 22, 'Category2', 12.706, -12.938);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (23, 'item23', 'Description for item 23.', 123, 'https://loremflickr.com/640/480/food', 23, 'Category3', 12.829, -12.617);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (24, 'item24', 'Description for item 24.', 124, 'https://loremflickr.com/640/480/food', 24, 'Category4', 12.952, -12.296);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (25, 'item25', 'Description for item 25.', 125, 'https://loremflickr.com/640/480/food', 25, 'Category0', 13.075, -11.975);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (26, 'item26', 'Description for item 26.', 126, 'https://loremflickr.com/640/480/food', 26, 'Category1', 13.198, -11.654);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (27, 'item27', 'Description for item 27.', 127, 'https://loremflickr.com/640/480/food', 27, 'Category2', 13.321, -11.333);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (28, 'item28', 'Description for item 28.', 128, 'https://loremflickr.com/640/480/food', 28, 'Category3', 13.444, -11.012);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (29, 'item29', 'Description for item 29.', 129, 'https://loremflickr.com/640/480/food', 29, 'Category4', 13.567, -10.691);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (30, 'item30', 'Description for item 30.', 130, 'https://loremflickr.com/640/480/food', 30, 'Category0', 13.69, -10.37);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (31, 'item31', 'Description for item 31.', 131, 'https://loremflickr.com/640/480/food', 31, 'Category1', 13.813, -10.049);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (32, 'item32', 'Description for item 32.', 132, 'https://loremflickr.com/640/480/food', 32, 'Category2', 13.936, -9.728);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (33, 'item33', 'Description for item 33.', 133, 'https://loremflickr.com/640/480/food', 33, 'Category3', 14.059, -9.407);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (34, 'item34', 'Description for item 34.', 134, 'https://loremflickr.com/640/480/food', 34, 'Category4', 14.182, -9.086);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (35, 'item35', 'Description for item 35.', 135, 'https://loremflickr.com/640/480/food', 35, 'Category0', 14.305, -8.765);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (36, 'item36', 'Description for item 36.', 136, 'https://loremflickr.com/640/480/food', 36, 'Category1', 14.428, -8.444);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (37, 'item37', 'Description for item 37.', 137, 'https://loremflickr.com/640/480/food', 37, 'Category2', 14.551, -8.123);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (38, 'item38', 'Description for item 38.', 138, 'https://loremflickr.com/640/480/food', 38, 'Category3', 14.674, -7.802);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (39, 'item39', 'Description for item 39.', 139, 'https://loremflickr.com/640/480/food', 39, 'Category4', 14.797, -7.481);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (40, 'item40', 'Description for item 40.', 140, 'https://loremflickr.com/640/480/food', 40, 'Category0', 14.92, -7.16);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (41, 'item41', 'Description for item 41.', 141, 'https://loremflickr.com/640/480/food', 41, 'Category1', 15.043, -6.839);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (42, 'item42', 'Description for item 42.', 142, 'https://loremflickr.com/640/480/food', 42, 'Category2', 15.166, -6.518);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (43, 'item43', 'Description for item 43.', 143, 'https://loremflickr.com/640/480/food', 43, 'Category3', 15.289, -6.197);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (44, 'item44', 'Description for item 44.', 144, 'https://loremflickr.com/640/480/food', 44, 'Category4', 15.412, -5.876);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (45, 'item45', 'Description for item 45.', 145, 'https://loremflickr.com/640/480/food', 45, 'Category0', 15.535, -5.555);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (46, 'item46', 'Description for item 46.', 146, 'https://loremflickr.com/640/480/food', 46, 'Category1', 15.658, -5.234);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (47, 'item47', 'Description for item 47.', 147, 'https://loremflickr.com/640/480/food', 47, 'Category2', 15.781, -4.913);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (48, 'item48', 'Description for item 48.', 148, 'https://loremflickr.com/640/480/food', 48, 'Category3', 15.904, -4.592);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (49, 'item49', 'Description for item 49.', 149, 'https://loremflickr.com/640/480/food', 49, 'Category4', 16.027, -4.271);
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES (50, 'item50', 'Description for item 50.', 150, 'https://loremflickr.com/640/480/food', 50, 'Category0', 16.15, -3.95);