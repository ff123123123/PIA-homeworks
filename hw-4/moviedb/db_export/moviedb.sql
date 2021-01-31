-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2021 at 06:04 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `genre` varchar(100) NOT NULL,
  `id` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`genre`, `id`) VALUES
('Fantasy', 102),
('Animation', 103),
('Drama', 104),
('Horror', 105),
('Action', 106),
('Comedy', 107),
('History', 108),
('Western', 109),
('Thriller', 110),
('Crime', 111),
('Documentary', 112),
('Science Fiction', 113),
('Mystery', 114),
('Music', 115),
('Romance', 116),
('Family', 117),
('War', 118),
('TV Movie', 119),
('Adventure', 101);

-- --------------------------------------------------------

--
-- Table structure for table `genre_movies`
--

CREATE TABLE `genre_movies` (
  `genreID` int(50) DEFAULT NULL,
  `movieID` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `plot` varchar(255) NOT NULL,
  `writer` varchar(100) NOT NULL,
  `director` varchar(100) NOT NULL,
  `production` varchar(100) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `year` varchar(50) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `length` varchar(50) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `plot`, `writer`, `director`, `production`, `cast`, `year`, `picture`, `length`, `genre`) VALUES
(9, 'Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'James Cameron', 'James Cameron', 'Paramount Pictures, 20th Century Fox, Lightstorm Entertainment', 'Leonardo DiCaprio, Kate Winslet, Billy Zane', '1997', 'C:\\fakepath\\Titanic.png', '194 min', 'Drama, Romance'),
(10, 'Avatar', 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'James Cameron', 'James Cameron', '20th Century Fox, Lightstorm Entertainment, Dune Entertainment, Ingenious Film Partners', 'Sam Worthington, Zoe Saldana, Sigourney Weaver', '2009', 'C:\\fakepath\\Avatar.jpg', '162 min', 'Action, Adventure, Fantasy '),
(11, 'The Martian', 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.', 'Drew Goddard, Andy Weir', 'Ridley Scott', 'Scott Free Productions, Kinberg Genre', 'Matt Damon, Jessica Chastain, Kristen Wiig', '2015', 'C:\\fakepath\\The_Martian.jpg', '144 min', 'Adventure, Drama, Sci-Fi'),
(13, 'The Godfather', 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'Mario Puzo, Francis Ford Coppola', 'Francis Ford Coppola', 'Paramount Pictures, Alfran Productions', 'Marlon Brando, Al Pacino, James Caan', '1972', '', '175 min', 'Crime, Drama'),
(14, 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'Quentin Tarantino, Roger Avary', 'Quentin Tarantino', 'A Band Apart, Jersey Films', 'John Travolta, Uma Thurman, Samuel L. Jackson', '1994', '', '154 min', 'Crime, Drama');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `usertype` varchar(50) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `username`, `password`, `usertype`) VALUES
(1, 'Pera', 'Peric', 'pp@test.com', 'PeraP', 'dddd5d7b474d2c78ebbb833789c4bfd721edf4bf', 'user'),
(2, 'Nikola', 'Nikolic', 'nn@test.com', 'NikolaN', '1303df0377b5c5c72aeb39f9334a94a7ad78d615', 'user'),
(3, 'Sima', 'Simic', 'simas@gmail.com', 'simas', 'test1234', 'user'),
(4, 'Jovan', 'Jovanovic', 'jovan@gmail.com', 'jovanj', '0fe703cc2d8c46958f9d5ca2c70df32e584bc68b', 'user'),
(5, 'Đorđe', 'Đorđević', 'dima@gmail.com', 'dima', '73050d3bab3bc9c0f86618663919fbce5af01bd6', 'admin'),
(6, 'Marko', 'Markovic', 'marko@test.com', 'markom', 'e427682febfd44cc2a87c41db9b8f8ee1459b844', 'user'),
(7, 'Marija', 'Markovic', 'marijam@test.com', 'marijam', '432eda8e849ea3fb18c2402a7e8f4c1e52b38dee', 'user'),
(8, 'Ana', 'Jovic', 'aj@test.com', 'anaj', 'de1ed20aab761e662d1346b81b03952960066edb', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_grades`
--

CREATE TABLE `user_grades` (
  `userID` int(50) DEFAULT NULL,
  `movieID` int(50) DEFAULT NULL,
  `grade` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
