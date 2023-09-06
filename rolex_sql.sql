create database rolex;
use rolex;

create table `role`(
role_id int not null auto_increment primary key,
role_name varchar(55)
);

create table `account`(
account_id int not null auto_increment primary key,
email varchar (60) unique,
passwords varchar(60),
role_id int not null,
foreign key(role_id) references `role`(role_id)
);

create table `user`(
id_user int not null auto_increment primary key,
name_user varchar(100) not null,
phone_number varchar(20),
email varchar(100) unique not null,
address varchar(100),
date_of_birth date not null,
gender bit(1) not null,
account_id int not null,
foreign key(account_id) references `account`(account_id)
);

create table category (
category_id int not null auto_increment primary key,
category_name varchar(100) not null,
descriptions longtext not null,
title varchar(250) not null
);

create table type_product(
type_id int not null auto_increment primary key,
type_name varchar(100) not null
);

create table `product`(
product_id int not null auto_increment primary key,
product_name varchar(100) not null,
product_code varchar(100) not null unique,
price double not null,
quantity int not null,
size varchar(50) not null,
color varchar(50),
material varchar(50),
date_at datetime not null,
product_status bit(1) default 0,
category_id int not null,
foreign key(category_id) references category(category_id),
type_id int not null,
foreign key(type_id) references type_product(type_id)
);

create table images(
image_id int primary key auto_increment,
image_url longtext not null,
product_id int,
foreign key(product_id) references product(product_id)
);

create table `order`(
order_id int not null auto_increment primary key,
date_order datetime not null,
order_status bit(1) default 0,
id_user int not null, 
foreign key (id_user) references `user`(id_user)
);

create table order_detail(
order_detail_id int not null auto_increment primary key,
quantity_order_detail int not null,
price double,
product_id int not null,
foreign key (product_id) references product(product_id),
order_id int not null,
foreign key (order_id) references `order`(order_id)
);
create TABLE shopping_cart(
	id_shopping_cart int PRIMARY KEY,
    user_id int NOT NULL,
	product_id int NOT NULL,
    quantity int CHECK(quantity >0),
    is_delete bit default 0,
	FOREIGN KEY(user_id)REFERENCES `user`(id_user),
    FOREIGN KEY(product_id)REFERENCES product(product_id)
);

INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('1', 'Rolex DateJust', 'Bất kỳ ngày nào cũng có thể để lại dấu ấn lâu dài trong cuộc đời chúng ta và tạo tiền đề cho những khát vọng mới. Kể từ khi được tạo ra vào năm 1945, Datejust đã tiếp tục tự đổi mới đồng thời là biểu tượng cho định nghĩa về sự thanh lịch cổ điển của Rolex. Một cột mốc quan trọng trong lịch sử chế tạo đồng hồ, đây là chiếc đồng hồ đeo tay chống thấm nước tự lên dây đầu tiên có cửa sổ hiển thị ngày. Được phóng đại bởi ống kính Cyclops, những con số này là lời nhắc nhở rằng mặc dù 24 giờ đánh dấu một ngày, nhưng chúng ta phải biến những ngày đó thành một ngày đáng nhớ.', 'Make A Date Of A Day');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('2', 'Rolex Cosmograph Daytona', 'Phong cách biểu tượng và hiệu suất vượt trội của Oyster Perpetual Cosmograph Daytona đã củng cố vị thế mang tính biểu tượng của nó vượt xa các đường đua mô tô.\n\nĐể đánh dấu kỷ niệm 60 năm của chiếc đồng hồ, Rolex đảm bảo huyền thoại sẽ tiếp tục tồn tại bằng cách xem lại toàn bộ dòng sản phẩm, thông qua quá trình gia công lại với độ chính xác cao liên quan đến vỏ, mặt cũng như bộ máy. Vô số điều chỉnh và phát triển là lời nhắc nhở rằng việc theo đuổi sự xuất sắc là một cuộc đua không có vạch đích.', 'An Icon Defying Time');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('3', 'Rolex Day-Date', 'Oyster Perpetual Day-Date 36 mới chào đón mặt số làm bằng đá trang trí với tông màu lung linh gợi lên bầu không khí của bờ biển Địa Trung Hải. Đá aventurine màu xanh lá cây, carnelian và ngọc lam được kết hợp với đồng hồ lần lượt bằng vàng Everose 18 ct, vàng vàng và vàng trắng.\n\nĐể thể hiện chuyên môn chế tạo mặt số của Rolex, đồng hồ Day-Date 36 mới cũng là minh chứng cho sự tinh thông hoàn hảo của thương hiệu trong nghệ thuật đính đá quý. Sự kết hợp giữa đá, đá quý và kim loại quý đặc biệt này nhấn mạnh sự khác biệt và sang trọng của chiếc đồng hồ danh giá này.', 'Every Dial A Discovery');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('4', 'Rolex GMT Master', 'Cho phép người đeo theo dõi tiến trình thời gian ở múi giờ khác, GMT-Master II nêu bật mối liên hệ của chúng ta với thế giới. Hiện có hai phiên bản mới – Rolesor vàng và vàng 18 ct – với vành đồng hồ Cerachrom bằng gốm màu xám và đen, một sự kết hợp màu hoàn toàn mới.\n\nTay nghề thủ công mẫu mực được thể hiện bằng sự lựa chọn vật liệu và độ chính xác của quá trình hoàn thiện, kết hợp với nhau để thể hiện chiếc đồng hồ dưới ánh sáng đẹp nhất. Sự tương phản hài hòa giữa màu vàng lấp lánh của dây đeo Jubilee và viền hai màu với tông màu tối, trầm gợi lên đường đi của mặt trời và sự luân phiên của ngày và đêm.', 'Highlighting Our Connection To The World');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('5', 'Rolex Oyster Perpetual', 'Sống động với màu sắc, sức sống và sự tích cực, các mặt số mới của Oyster Perpetual 31, Oyster Perpetual 36 và Oyster Perpetual 41 được điểm xuyết bằng những bong bóng nhiều màu sắc vui tươi tái hợp năm màu sắc được giới thiệu cho dòng sản phẩm này vào năm 2020.\n\nThiết kế sủi bọt, hưng phấn này là sản phẩm của nghệ thuật và kỹ thuật bậc thầy. Việc trang trí mặt số được thực hiện trong môi trường được kiểm soát chặt chẽ để ngăn chặn mọi ô nhiễm từ bụi và đòi hỏi độ chính xác tối đa ở mọi giai đoạn để tạo ra màu sắc tuyệt vời.', 'An Effervescence Of Excellence');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('6', 'Rolex Submariner', 'Ra mắt vào năm 1953, Rolex Submariner là đồng hồ đeo tay dành cho thợ lặn đầu tiên có khả năng chống thấm nước ở độ sâu 100 mét (330 feet) – hiện nay là 300 mét (1.000 feet). Các tính năng chính của nó, chẳng hạn như đai kính xoay có chia độ, màn hình phát quang, kim lớn và vạch chỉ giờ, là động lực tạo ra dòng đồng hồ lặn dài của Rolex sau này.\n\nSubmariner là chiếc đồng hồ mang tính biểu tượng mà danh tiếng của nó giờ đây đã vượt ra ngoài giới chuyên môn mà nó được thiết kế lần đầu tiên. Submariner, tiêu chuẩn tối thượng.', 'Deep Confidence');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('7', 'Rolex Sea Dweller', 'Biểu tượng cho lịch sử chung lâu dài giữa Rolex và những nhà thám hiểm biển sâu, các mẫu Sea-Dweller, Rolex Deepsea và Deepsea Challenge là những chiếc đồng hồ dành cho thợ lặn chuyên nghiệp có độ bền siêu cao. Sea-Dweller, ra mắt năm 1967, có khả năng chống nước ở độ sâu 1.220 mét (4.000 feet) – ban đầu là 610 mét (2.000 feet). Rolex Deepsea, ra mắt năm 2008, chịu được áp lực ở độ sâu 3900 mét (12.800 feet) và Deepsea Challenge, được trình làng vào năm 2022, có thể đạt tới độ sâu 11.000 mét (36.090 feet).', 'Bravery Under Pressure');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('8', 'Rolex 1908', 'Thanh lịch, cổ điển và đương đại, Perpetual 1908 thể hiện tinh thần táo bạo lâu đời của Rolex. Kế thừa những quy tắc lịch sử của thương hiệu cũng như vô số cải tiến trong chế tạo đồng hồ, chiếc đồng hồ này đánh dấu một cột mốc mới trong việc theo đuổi sự xuất sắc của thương hiệu. Ý tưởng và sáng tạo mẫu mới này chứng tỏ chuyên môn nội bộ toàn diện của Nhà sản xuất.\n\nLấy cảm hứng từ chiếc Oyster Perpetual từ năm 1931, chiếc đồng hồ hoàn toàn mới này đáp ứng thách thức về một chiếc đồng hồ mỏng hơn theo tiêu chuẩn Rolex và báo trước sự xuất hiện của bộ sưu tập Perpetual, bộ sưu tập định nghĩa lại đồng hồ đeo tay truyền thống theo tinh thần tiên phong của thương hiệu. Cái tên ‘1908’ ám chỉ ngày nhãn hiệu ‘Rolex’ được đăng ký chính thức tại Thụy Sĩ.\n\nHứa hẹn hiệu suất vượt trội, chiếc 1908 đã tạo dựng được một vị trí cho riêng mình như một chiếc Rolex thấm nhuần truyền thống nhưng vẫn toát lên vẻ hiện đại.', 'The New Face Of Excellence');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('9', 'Rolex Sky Dweller', 'Với hai múi giờ và lịch hàng năm, Sky-Dweller là người bạn đồng hành thanh lịch và đáng tin cậy của du khách thế giới. Dòng sản phẩm này đã được cập nhật với nhiều cải tiến chứng minh rằng, đối với Rolex, sự xuất sắc được thể hiện ngay cả trong những chi tiết nhỏ nhất.\n\nCác chi tiết trang trí mang tính thẩm mỹ được giới thiệu cùng với các phiên bản mới tham gia vào dòng sản phẩm này. Và đồng hồ chứng kiến sự phát triển về mặt kỹ thuật với sự ra đời của bộ chuyển động được trang bị những tiến bộ mới nhất trong công nghệ Rolex.', 'To The Ultimate And Beyond');
INSERT INTO `rolex`.`category` (`category_id`, `category_name`, `descriptions`, `title`) VALUES ('10', 'Rolex Yatch Master', 'Nhẹ và mạnh mẽ, Oyster Perpetual Yacht-Master 42 mới bằng titan RLX là đồng minh của những người tìm kiếm sự tự do di chuyển. Đặc biệt phù hợp với nhu cầu và áp lực của môn đua thuyền cạnh tranh, nó đặt chất lượng chế tạo đồng hồ xuất sắc phục vụ cho hoạt động thể thao.\n\nYacht-Master 42 là chiếc đồng hồ thứ hai bằng titan RLX được Rolex phát hành sau Cuộc thi Oyster Perpetual Deepsea Challenge, xác nhận rằng độ nhẹ là một phẩm chất cần được coi trọng.', 'Mastering Lightness');


INSERT INTO `rolex`.`type_product` (`type_id`, `type_name`) VALUES ('1', 'Nam');
INSERT INTO `rolex`.`type_product` (`type_id`, `type_name`) VALUES ('2', 'Nữ');

INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('1', 'DATEJUST 36', 'D10321', '221977500', '3', '36 mm', 'vàng trắng', 'Oystersteel ', '2023-08-31', '1', '2');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`,  `category_id`, `type_id`) VALUES ('2', 'DATEJUST 36', 'D10312', '313868000', '3', '36 mm', 'vàng Everose', 'Oystersteel', '2023-08-31',  '1', '2');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('3', 'DATEJUST 31', 'M278274', '255927000 ', '3', '31 mm', 'vàng trắng','Oystersteel', '2023-08-31', '1', '2');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`,  `category_id`, `type_id`) VALUES ('4', 'DATEJUST 31', 'M278240', '174970500', '3', '31 mm', 'trắng', 'Oystersteel', '2023-08-31',  '1', '2');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('5', 'DATEJUST 31', 'M278341rbr', '389113500', '3', '31 mm', 'vàng Eversose và kim cương', 'Oystersteel', '2023-08-31',  '1', '2');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('6', 'DATEJUST 41', 'M126331', '375046000', '3', '41 mm', 'vàng Everose', 'Oystersteel', '2023-08-31',  '1', '1');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`,  `category_id`, `type_id`) VALUES ('7', 'DATEJUST 38', 'M731331', '498220000', '3','38 mm', 'vàng trắng', 'Oystersteel', '2023-08-31',  '1', '1');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('8', 'DATEJUST 41', 'M126303', '345787000 ', '3', '41 mm', 'vàng vàng', 'Oystersteel', '2023-08-31',  '1 ', '1');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`,  `category_id`, `type_id`) VALUES ('9', 'DATEJUST 40', 'M791231','239450000', '3', '40 mm', 'vàng vàng và kim cương', 'Oystersteel', '2023-08-31', '1', '1');
INSERT INTO `rolex`.`product` (`product_id`, `product_name`, `product_code`, `price`, `quantity`, `size`, `color`, `material`, `date_at`, `category_id`, `type_id`) VALUES ('10', 'DATEJUST 39','M039172', '413290000', '3', '39 mm', 'vàng vàng và kim cương','Oystersteel', '2023-08-31',  '1', '1');


INSERT INTO `rolex`.`role` (`role_id`, `role_name`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `rolex`.`role` (`role_id`, `role_name`) VALUES ('2', 'ROLE_USER');

INSERT INTO `rolex`.`account` (`account_id`, `email`, `passwords`, `role_id`) VALUES ('1', 'tuankiett2309@gmail.com', '123', '1');
INSERT INTO `rolex`.`account` (`account_id`, `email`, `passwords`, `role_id`) VALUES ('2', 'ngocnga@gmail.com', '123', '2');

INSERT INTO `rolex`.`user` (`id_user`, `name_user`, `phone_number`, `email`, `address`, `date_of_birth`, `gender`, `account_id`) VALUES ('1', 'Nguyễn Tuấn Kiệt', '0965702079', 'tuankiett2309@gmail.com', 'Da Nang', '1996-07-09', 0, '1');
INSERT INTO `rolex`.`user` (`id_user`, `name_user`, `phone_number`, `email`, `address`, `date_of_birth`, `gender`, `account_id`) VALUES ('2','Ngọc Nga', '0965922279', 'ngocnga@gmail.com', 'Da Nang', '1999-03-31',1, '2');
