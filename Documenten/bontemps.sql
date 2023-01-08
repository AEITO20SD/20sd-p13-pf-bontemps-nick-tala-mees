-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 08 jan 2023 om 21:52
-- Serverversie: 10.4.14-MariaDB
-- PHP-versie: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bontemps`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `addon`
--

CREATE TABLE `addon` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Menu\'s');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ingredient`
--

CREATE TABLE `ingredient` (
  `id` int(11) NOT NULL,
  `typeIngredientId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `storedAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imgUrl` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `menu`
--

INSERT INTO `menu` (`id`, `name`, `price`, `description`, `imgUrl`) VALUES
(6, 'Taart menu', '24.50', 'de lekkerste taart menu.', '/assets/img/taartmenu.png'),
(7, 'Herfst menu', '30.50', 'de lekkerste herfst menu.', '/assets/img/herfstmenu.png'),
(8, 'pannenkoek menu', '15.90', 'de lekkerste pannenkoek menu.', '/assets/img/pannenkoekmenu.png'),
(9, 'pasta menu', '20.00', 'de lekkerste pasta menu.', '/assets/img/pastamenu.png'),
(10, 'Vlees menu', '40.00', 'de lekkerste vlees menu.', '/assets/img/vleesmenu.png'),
(11, 'Salade menu', '19.70', 'de lekkerste salade menu.', '/assets/img/salademenu.png'),
(12, 'Sushi menu', '50.65', 'de lekkerste sushi menu.', '/assets/img/sushimenu.png'),
(13, 'burgermenu menu', '23.70', 'de lekkerste burger menu.', '/assets/img/burgermenu.png'),
(14, 'Broodjes menu', '19.70', 'de lekkerste broodjes menu.', '/assets/img/broodjesmenu.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `menu_recipe`
--

CREATE TABLE `menu_recipe` (
  `menuId` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `menu_recipe`
--

INSERT INTO `menu_recipe` (`menuId`, `recipeId`) VALUES
(6, 6),
(6, 12),
(6, 6),
(6, 13);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `typeRecipeId` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imgUrl` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `typeRecipeId`, `description`, `imgUrl`) VALUES
(6, 'Chocolade taart', 6, 'Chocoladetaart is een taart die zich kenmerkt door het feit dat hij gesmolten chocolade of cacaopoeder bevat. ', 'assets/img/chocoladetaart.png'),
(12, 'Roze taart', 0, 'Lekkere Roze taart.', 'assets\\img\\rozetaart.png'),
(13, 'Slagroom taart', 0, 'Lekkere Slagroom taart.', 'assets\\img\\slagroomtaart.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `recipe_ingredient`
--

CREATE TABLE `recipe_ingredient` (
  `recipeId` int(11) NOT NULL,
  `ingredientId` int(11) NOT NULL,
  `ingredientAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `guestAmount` int(11) NOT NULL,
  `uniqueString` varchar(255) NOT NULL,
  `dateOfCreation` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reservationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `reservation_addon`
--

CREATE TABLE `reservation_addon` (
  `reservationId` int(11) NOT NULL,
  `addonId` int(11) NOT NULL,
  `addonAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `reservation_menu`
--

CREATE TABLE `reservation_menu` (
  `reservationId` int(11) NOT NULL,
  `menuId` int(11) NOT NULL,
  `menuAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Gebruiker'),
(2, 'Bediening'),
(3, 'Chef'),
(4, 'Manager'),
(5, 'Eigenaar'),
(6, 'Admin');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `tableNumber` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `table_reservation`
--

CREATE TABLE `table_reservation` (
  `reservationId` int(11) NOT NULL,
  `startTime` timestamp NULL DEFAULT NULL,
  `endTime` timestamp NULL DEFAULT NULL,
  `tableId` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `type_ingredient`
--

CREATE TABLE `type_ingredient` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `type_recipe`
--

CREATE TABLE `type_recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `postalCode` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `vertification` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `phonenumber`, `email`, `street`, `postalCode`, `city`, `vertification`) VALUES
(3, 'tota kahlous', '$2b$10$ffkRNZaJglzqFrTzzoHXpe/iqziqPQEcUoz8lIZ5eAWHBYVGcVw1y', '0684464962', 'talahasan1999@gmail.com', 'helloworld', '1763kg', 'Alkmaar', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_password_reset`
--

CREATE TABLE `user_password_reset` (
  `uniqueString` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `expiredAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_role`
--

CREATE TABLE `user_role` (
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `user_role`
--

INSERT INTO `user_role` (`userId`, `roleId`) VALUES
(3, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_vertification_email`
--

CREATE TABLE `user_vertification_email` (
  `id` int(11) NOT NULL,
  `uniqueString` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `expiredAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `user_vertification_email`
--

INSERT INTO `user_vertification_email` (`id`, `uniqueString`, `userId`, `expiredAt`, `createdAt`) VALUES
(1, '$2b$10$/5D1EXti.WVIPGgzDDbmFOJM/j9tmyLKav.Db4lkN/FxOwoYmy3R.', '1', '2022-10-25 07:59:12', '2022-10-25 07:55:36'),
(2, '$2b$10$SbAs9rYKugycGBeK7yuTZO561WDJpcjBKi9ZE1gPNwKSBJ/Q0Tqu6', '2', '2022-10-25 08:26:47', '2022-10-25 08:23:11');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `addon`
--
ALTER TABLE `addon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexen voor tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeId` (`typeIngredientId`);

--
-- Indexen voor tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `menu_recipe`
--
ALTER TABLE `menu_recipe`
  ADD KEY `recipeId` (`recipeId`),
  ADD KEY `menuId` (`menuId`);

--
-- Indexen voor tabel `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeRecipesId-recipe` (`typeRecipeId`);

--
-- Indexen voor tabel `recipe_ingredient`
--
ALTER TABLE `recipe_ingredient`
  ADD KEY `recipeId` (`recipeId`),
  ADD KEY `ingredientId` (`ingredientId`);

--
-- Indexen voor tabel `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexen voor tabel `reservation_addon`
--
ALTER TABLE `reservation_addon`
  ADD UNIQUE KEY `reservationId` (`reservationId`),
  ADD KEY `addonId` (`addonId`);

--
-- Indexen voor tabel `reservation_menu`
--
ALTER TABLE `reservation_menu`
  ADD KEY `menuId` (`menuId`),
  ADD KEY `reservationId` (`reservationId`);

--
-- Indexen voor tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tableId-reservation` (`tableNumber`);

--
-- Indexen voor tabel `table_reservation`
--
ALTER TABLE `table_reservation`
  ADD PRIMARY KEY (`reservationId`,`tableId`),
  ADD KEY `tableReservation-tables` (`tableId`);

--
-- Indexen voor tabel `type_ingredient`
--
ALTER TABLE `type_ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `type_recipe`
--
ALTER TABLE `type_recipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `user_role`
--
ALTER TABLE `user_role`
  ADD KEY `userId` (`userId`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexen voor tabel `user_vertification_email`
--
ALTER TABLE `user_vertification_email`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `addon`
--
ALTER TABLE `addon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT voor een tabel `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT voor een tabel `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT voor een tabel `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `table_reservation`
--
ALTER TABLE `table_reservation`
  MODIFY `reservationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `type_ingredient`
--
ALTER TABLE `type_ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `type_recipe`
--
ALTER TABLE `type_recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `user_vertification_email`
--
ALTER TABLE `user_vertification_email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `addon`
--
ALTER TABLE `addon`
  ADD CONSTRAINT `categoryId-addon` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `ingredient`
--
ALTER TABLE `ingredient`
  ADD CONSTRAINT `typeIngredientId-ingredient` FOREIGN KEY (`typeIngredientId`) REFERENCES `type_ingredient` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `menu_recipe`
--
ALTER TABLE `menu_recipe`
  ADD CONSTRAINT `menuId-menu_recipe` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `recipeId-menu_recipe` FOREIGN KEY (`recipeId`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `recipe_ingredient`
--
ALTER TABLE `recipe_ingredient`
  ADD CONSTRAINT `ingredientId-recipe_ingredient` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `recipeId-recipe_ingredient` FOREIGN KEY (`recipeId`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `reservation_addon`
--
ALTER TABLE `reservation_addon`
  ADD CONSTRAINT `addonId-reservation_addon` FOREIGN KEY (`addonId`) REFERENCES `addon` (`id`),
  ADD CONSTRAINT `reservationId-reservation_addon` FOREIGN KEY (`reservationId`) REFERENCES `reservation` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `reservation_menu`
--
ALTER TABLE `reservation_menu`
  ADD CONSTRAINT `menuId-reservation_menu` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reservationId-reservation_menu` FOREIGN KEY (`reservationId`) REFERENCES `reservation` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `table_reservation`
--
ALTER TABLE `table_reservation`
  ADD CONSTRAINT `tableReservation-reservation` FOREIGN KEY (`reservationId`) REFERENCES `reservation` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tableReservation-tables` FOREIGN KEY (`tableId`) REFERENCES `tables` (`id`) ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `roleId-user_role` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `userId-user_role` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
