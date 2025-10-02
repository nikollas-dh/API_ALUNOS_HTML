-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           11.8.2-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para escola_db
CREATE DATABASE IF NOT EXISTS `escola_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `escola_db`;

-- Copiando estrutura para tabela escola_db.alunos
CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `cpf` char(11) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `uf` char(2) DEFAULT NULL,
  `rua` varchar(120) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `complemento` varchar(120) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT current_timestamp(),
  `UPDATE_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Copiando dados para a tabela escola_db.alunos: ~9 rows (aproximadamente)
INSERT IGNORE INTO `alunos` (`id`, `nome`, `cpf`, `cep`, `uf`, `rua`, `numero`, `complemento`, `create_at`, `UPDATE_at`) VALUES
	(1, 'Vitor Lima', '12345678910', '0600000', 'SP', 'Rua Senai', 123, 'APTO 12', '2025-09-16 12:05:16', '2025-09-16 12:05:16'),
	(2, 'Campos Lima', '22375678910', '0600000', 'SP', 'Rua Senai', 123, 'APTO 12', '2025-09-16 12:05:16', '2025-09-16 12:05:16'),
	(3, 'Liminha', '12345678910', '0600000', 'BA', 'Rua Senai', 3, 'APTO 4', '2025-09-16 12:05:16', '2025-09-16 12:05:16'),
	(4, 'nikollas', '12345678910', '0600000', 'SP', 'Rua Senai', 123, 'APTO 12', '2025-09-16 12:05:16', '2025-09-16 12:05:16'),
	(5, 'vitinho', '1234568910', '', '', '', 48, '', '2025-09-30 13:48:20', '2025-09-30 13:48:20'),
	(6, 'vitinho', '1234568910', '', '', '', 48, '', '2025-09-30 13:48:23', '2025-09-30 13:48:23'),
	(7, 'lucas', '1234568911', '', '', '', 59, '', '2025-09-30 13:49:21', '2025-09-30 13:49:21'),
	(8, 'lucas', '1234568911', '', '', '', 59, '', '2025-09-30 13:49:22', '2025-09-30 13:49:22'),
	(9, 'lucas', '1234568911', '', '', '', 59, '', '2025-09-30 13:51:28', '2025-09-30 13:51:28');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
