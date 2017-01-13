-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 03-02-2016 a las 15:22:54
-- Versión del servidor: 5.6.28
-- Versión de PHP: 5.6.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm-callcenter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Contactos`
--

CREATE TABLE IF NOT EXISTS `Contactos` (
  `id` bigint(20) NOT NULL,
  `campana` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` varchar(5) COLLATE latin1_spanish_ci DEFAULT NULL,
  `telefono` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `llamadaEstablecida` varchar(2) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `genero` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `edad` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email` varchar(30) COLLATE latin1_spanish_ci DEFAULT NULL,
  `celular` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `duracionLlamada` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `bajoMensaje` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  `temasConversacion` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `enviarInforme` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  `textoInforme` varchar(1000) COLLATE latin1_spanish_ci DEFAULT NULL,
  `anecdotario` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  `grabacionDisponible` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  `resultadoLlamada` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `observaciones` varchar(1000) COLLATE latin1_spanish_ci DEFAULT NULL,
  `guardado` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Contactos`
--
ALTER TABLE `Contactos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Contactos`
--
ALTER TABLE `Contactos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE IF NOT EXISTS `Usuarios` (
  `id` bigint(20) NOT NULL,
  `user` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `pass` varchar(50) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `user`, `pass`) VALUES
(1, 'callcenter', '202cb962ac59075b964b07152d234b70');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
