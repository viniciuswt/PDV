-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 26-Dez-2023 às 11:28
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbpdv`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `caixa`
--

CREATE TABLE `caixa` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `id_loja` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `dinheiro_atual` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `caixa`
--

INSERT INTO `caixa` (`id`, `nome`, `id_loja`, `status`, `dinheiro_atual`) VALUES
(129, 'Caixa 01', 19, 0, 0),
(139, 'Ccc', 18, 0, 1000),
(140, 'Teste', 18, 1, 690),
(142, 'Caixa 03', 18, 1, 3170),
(143, 'Caixa Novo', 18, 0, 250),
(145, 'Caixa 04', 18, 1, 30);

-- --------------------------------------------------------

--
-- Estrutura da tabela `loja`
--

CREATE TABLE `loja` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `metodo_pagamento`
--

CREATE TABLE `metodo_pagamento` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `id_loja` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `metodo_pagamento`
--

INSERT INTO `metodo_pagamento` (`id`, `nome`, `id_loja`) VALUES
(7, 'Pix', 18),
(8, 'Dinheiro', 18),
(14, 'Cartão', 18),
(15, 'Cheque', 18);

-- --------------------------------------------------------

--
-- Estrutura da tabela `movimentacoes_caixa`
--

CREATE TABLE `movimentacoes_caixa` (
  `id` int NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `valor` double NOT NULL,
  `id_operador` int NOT NULL,
  `id_caixa` int NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_loja` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `movimentacoes_caixa`
--

INSERT INTO `movimentacoes_caixa` (`id`, `tipo`, `valor`, `id_operador`, `id_caixa`, `data`, `id_loja`) VALUES
(1, 'Reforço', 2, 9, 111, '2023-04-20 18:14:51', 18),
(2, 'Reforço', 20, 9, 120, '2023-04-20 18:15:13', 18),
(3, 'Reforço', 1910, 9, 111, '2023-04-20 18:15:21', 18),
(4, 'Reforço', 3820.04, 9, 111, '2023-04-20 18:15:34', 18),
(5, 'Reforço', 974, 9, 126, '2023-04-20 19:39:47', 18),
(6, 'Reforço', 40, 9, 120, '2023-04-20 19:47:39', 18),
(7, 'Reforço', 1948, 9, 126, '2023-04-20 19:47:44', 18),
(8, 'Sangria', 2, 9, 111, '2023-04-20 19:51:27', 18),
(9, 'Reforço', 4.44, 9, 130, '2023-04-23 22:12:50', 18),
(10, 'Reforço', 3.33, 9, 130, '2023-04-23 22:16:43', 18),
(11, 'Reforço', 3.33, 9, 131, '2023-04-23 22:17:01', 18),
(12, 'Sangria', 0.33, 9, 131, '2023-04-23 22:17:07', 18),
(13, 'Reforço', 0.04, 9, 133, '2023-04-23 22:27:05', 18),
(14, 'Reforço', 0.22, 9, 135, '2023-04-23 22:33:04', 18),
(15, 'Reforço', 0.33, 9, 136, '2023-04-23 22:33:31', 18),
(16, 'Sangria', 0.33, 9, 136, '2023-04-23 22:34:02', 18),
(17, 'Reforço', 0.33, 9, 137, '2023-04-23 22:37:42', 18),
(18, 'Sangria', 0.33, 9, 137, '2023-04-23 22:38:00', 18),
(19, 'Reforço', 100, 9, 143, '2023-05-17 14:49:43', 18),
(20, 'Sangria', 160, 18, 139, '2023-07-10 23:30:08', 18),
(21, 'Reforço', 1000, 18, 139, '2023-07-10 23:30:49', 18),
(22, 'Reforço', 20, 18, 145, '2023-09-13 18:29:26', 18);

-- --------------------------------------------------------

--
-- Estrutura da tabela `operador`
--

CREATE TABLE `operador` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `id_loja` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `operador`
--

INSERT INTO `operador` (`id`, `nome`, `admin`, `email`, `senha`, `id_loja`) VALUES
(18, 'teste', 1, 'querodelivery@quero.com', '$2b$12$haGNV62WAQJ9bQTEB5M.zOWjAfT2mGofByFIXClWTewCeaSdUORQS', 18),
(20, 'quero', 18, 'victor@gmail.com', '123', 18),
(21, 'xx', 1, 'admin@admin.com', '$2b$12$gDvOyQOXpCwjDCV14OdfTOgK4yll6D1rNaqRJ7pDk6MgdpXkfILtS', 19),
(25, 'operador', 0, 'k@k.com', '$2b$12$BYXlHP3pZvKmjBhg08.rkeT7Kf/vbTHgxnrnzCBHWqWGmpVa3PnR2', 18);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtospdv`
--

CREATE TABLE `produtospdv` (
  `id` int NOT NULL,
  `codigo_barras` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `unidade` varchar(255) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `id_loja` int NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtospdv`
--

INSERT INTO `produtospdv` (`id`, `codigo_barras`, `nome`, `unidade`, `valor`, `id_loja`, `data`) VALUES
(3, '90434309', 'teste01', 'KG', '10', 18, '2023-02-21 13:13:28'),
(4, '9439389', 'Teste02', 'f', '10', 18, '2023-02-21 13:15:38'),
(5, '13739662', 'Scanner', 'uni', '150', 18, '2023-02-21 13:16:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda`
--

CREATE TABLE `venda` (
  `id` int NOT NULL,
  `id_caixa` int DEFAULT NULL,
  `id_operador` int NOT NULL,
  `id_loja` int NOT NULL,
  `comNota` tinyint(1) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `venda`
--

INSERT INTO `venda` (`id`, `id_caixa`, `id_operador`, `id_loja`, `comNota`, `valor`, `data`) VALUES
(321, 140, 18, 18, 0, '10', '2023-04-24 20:48:34'),
(323, 140, 18, 18, 0, '10', '2023-04-26 18:57:27'),
(324, 140, 18, 18, 0, '10', '2023-04-26 18:59:42'),
(326, 140, 18, 18, 0, '10', '2023-04-26 20:55:42'),
(328, 140, 18, 18, 0, '60', '2023-04-27 01:23:59'),
(329, 140, 18, 18, 0, '60', '2023-04-27 01:24:24'),
(331, 140, 18, 18, 0, '10', '2023-04-27 01:29:41'),
(333, 140, 18, 18, 0, '10', '2023-04-27 02:16:38'),
(334, 142, 18, 18, 0, '10', '2023-04-27 02:47:20'),
(335, 140, 18, 18, 0, '10', '2023-04-27 04:24:57'),
(336, 140, 18, 18, 0, '10', '2023-04-27 04:25:09'),
(342, 140, 18, 18, 0, '20', '2023-05-08 22:59:11'),
(343, 142, 18, 18, 0, '0', '2023-05-08 23:06:54'),
(344, 142, 18, 18, 0, '10', '2023-05-08 23:09:39'),
(345, 142, 18, 18, 0, '10', '2023-05-08 23:12:38'),
(346, 142, 18, 18, 0, '10', '2023-05-08 23:12:49'),
(347, 142, 18, 18, 0, '40', '2023-05-08 23:15:38'),
(348, 142, 18, 18, 0, '10', '2023-05-09 19:25:51'),
(349, 142, 18, 18, 0, '10', '2023-05-09 21:58:53'),
(350, 142, 18, 18, 1, '10', '2023-05-09 22:08:14'),
(351, 142, 25, 18, 0, '10', '2023-05-09 22:10:35'),
(352, 143, 18, 18, 0, '150', '2023-05-17 14:49:53'),
(353, 142, 18, 18, 0, '20', '2023-05-17 14:50:46'),
(354, 140, 18, 18, 0, '10', '2023-05-18 13:59:28'),
(355, 142, 18, 18, 0, '10', '2023-05-27 00:29:39'),
(356, 142, 18, 18, 0, '0', '2023-05-27 00:29:45'),
(357, 140, 18, 18, 0, '10', '2023-05-27 02:28:38'),
(358, 140, 18, 18, 0, '190', '2023-05-27 13:59:11'),
(359, 142, 18, 18, 0, '70', '2023-06-10 23:38:42'),
(360, 142, 18, 18, 0, '10', '2023-06-10 23:39:02'),
(361, 142, 18, 18, 0, '10', '2023-06-11 00:21:54'),
(362, 142, 18, 18, 0, '250', '2023-06-12 00:22:47'),
(366, 142, 18, 18, 0, '60', '2023-06-25 01:55:09'),
(367, 142, 18, 18, 0, '10', '2023-07-10 22:59:10'),
(368, 142, 18, 18, 0, '100', '2023-07-10 23:28:18'),
(369, 142, 18, 18, 0, '10', '2023-07-10 23:28:40'),
(370, 142, 18, 18, 0, '30', '2023-07-26 23:53:41'),
(371, 140, 18, 18, 0, '10', '2023-07-26 23:55:09'),
(372, 142, 18, 18, 0, '100', '2023-07-27 00:03:57'),
(373, 142, 18, 18, 1, '20', '2023-07-27 00:05:02'),
(374, 142, 18, 18, 0, '10', '2023-07-27 00:08:11'),
(375, 142, 18, 18, 0, '10', '2023-09-13 14:06:44'),
(376, 142, 18, 18, 0, '150', '2023-09-13 14:45:23'),
(377, 142, 18, 18, 0, '10', '2023-09-13 17:05:34'),
(378, 142, 18, 18, 0, '970', '2023-09-13 18:09:10'),
(379, 142, 18, 18, 0, '10', '2023-09-13 18:11:48'),
(380, 142, 18, 18, 0, '10', '2023-09-13 18:13:03'),
(381, 142, 18, 18, 0, '10', '2023-09-13 18:16:10'),
(382, 142, 18, 18, 0, '10', '2023-09-13 18:25:28'),
(383, 142, 18, 18, 0, '10', '2023-09-13 18:27:16'),
(385, 145, 18, 18, 0, '10', '2023-09-13 18:29:36'),
(387, 142, 18, 18, 0, '10', '2023-10-09 19:10:14'),
(388, 142, 18, 18, 0, '150', '2023-11-23 13:34:28'),
(389, 142, 18, 18, 0, '150', '2023-11-23 13:35:19'),
(390, 142, 18, 18, 0, '150', '2023-11-23 13:36:58'),
(391, 142, 18, 18, 0, '600', '2023-11-23 23:40:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda_metodopagamento`
--

CREATE TABLE `venda_metodopagamento` (
  `id` int NOT NULL,
  `id_metodoPagamento` int NOT NULL,
  `id_venda` int NOT NULL,
  `valor` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `venda_metodopagamento`
--

INSERT INTO `venda_metodopagamento` (`id`, `id_metodoPagamento`, `id_venda`, `valor`) VALUES
(206, 7, 342, '20'),
(207, 7, 343, '0'),
(208, 7, 344, '10'),
(209, 7, 345, '10'),
(210, 7, 346, '10'),
(211, 7, 347, '40'),
(212, 7, 348, '10'),
(213, 7, 349, '10'),
(214, 8, 350, '10'),
(215, 7, 351, '10'),
(216, 7, 352, '150'),
(217, 7, 353, '20'),
(218, 7, 354, '10'),
(219, 7, 355, '10'),
(220, 7, 357, '10'),
(221, 7, 358, '190'),
(222, 7, 359, '70'),
(223, 8, 360, '10'),
(224, 7, 361, '10'),
(225, 7, 362, '250'),
(231, 7, 366, '40'),
(232, 14, 366, '20'),
(233, 7, 367, '10'),
(234, 7, 367, '10'),
(235, 8, 368, '100'),
(236, 7, 369, '10'),
(237, 7, 370, '30'),
(238, 7, 371, '10'),
(239, 8, 372, '5'),
(240, 8, 372, '5'),
(241, 8, 372, '5'),
(242, 8, 372, '5'),
(243, 8, 372, '50'),
(244, 8, 372, '50'),
(245, 7, 373, '20'),
(246, 7, 374, '10'),
(247, 7, 375, '10'),
(248, 7, 376, '150'),
(249, 7, 377, '10'),
(250, 7, 378, '970'),
(251, 7, 379, '10'),
(252, 7, 380, '10'),
(253, 7, 381, '10'),
(254, 7, 382, '10'),
(255, 7, 383, '10'),
(257, 7, 385, '10'),
(259, 7, 387, '10'),
(260, 14, 387, '10'),
(261, 7, 388, '150'),
(262, 7, 389, '150'),
(263, 7, 390, '150'),
(264, 7, 391, '300'),
(265, 8, 391, '300');

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda_produtospdv`
--

CREATE TABLE `venda_produtospdv` (
  `id` int NOT NULL,
  `id_produto` int NOT NULL,
  `id_venda` int NOT NULL,
  `quantidade` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `venda_produtospdv`
--

INSERT INTO `venda_produtospdv` (`id`, `id_produto`, `id_venda`, `quantidade`) VALUES
(178, 4, 321, 2),
(180, 3, 323, 1),
(181, 4, 324, 1),
(183, 3, 326, 1),
(185, 4, 328, 5),
(186, 3, 328, 1),
(187, 4, 329, 5),
(188, 3, 329, 1),
(191, 4, 331, 1),
(193, 3, 333, 1),
(194, 3, 334, 1),
(195, 4, 335, 1),
(196, 4, 336, 1),
(202, 3, 342, 2),
(203, 3, 344, 1),
(204, 3, 345, 1),
(205, 3, 346, 1),
(206, 3, 347, 4),
(207, 4, 348, 1),
(208, 4, 349, 1),
(209, 4, 350, 1),
(210, 3, 351, 1),
(211, 5, 352, 1),
(212, 3, 353, 1),
(213, 4, 353, 1),
(214, 3, 354, 1),
(215, 4, 355, 1),
(216, 3, 357, 1),
(217, 3, 358, 1),
(218, 4, 358, 3),
(219, 5, 358, 1),
(220, 4, 359, 7),
(221, 4, 360, 1),
(222, 3, 361, 1),
(223, 4, 362, 25),
(227, 3, 366, 6),
(228, 3, 367, 1),
(229, 4, 368, 8),
(230, 3, 368, 2),
(231, 4, 369, 1),
(232, 4, 370, 1),
(233, 3, 370, 2),
(234, 4, 371, 1),
(235, 4, 372, 3),
(236, 3, 372, 7),
(237, 4, 373, 2),
(238, 3, 374, 1),
(239, 3, 375, 1),
(240, 4, 376, 15),
(241, 4, 377, 1),
(242, 4, 378, 80),
(243, 3, 378, 17),
(244, 3, 379, 1),
(245, 3, 380, 1),
(246, 4, 381, 1),
(247, 3, 382, 1),
(248, 3, 383, 1),
(250, 3, 385, 1),
(252, 3, 387, 1),
(253, 5, 388, 1),
(254, 5, 389, 1),
(255, 5, 390, 1),
(256, 5, 391, 4);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `caixa`
--
ALTER TABLE `caixa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_loja_user` (`id_loja`);

--
-- Índices para tabela `loja`
--
ALTER TABLE `loja`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `metodo_pagamento`
--
ALTER TABLE `metodo_pagamento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_loja` (`id_loja`);

--
-- Índices para tabela `movimentacoes_caixa`
--
ALTER TABLE `movimentacoes_caixa`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `operador`
--
ALTER TABLE `operador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_loja` (`id_loja`);

--
-- Índices para tabela `produtospdv`
--
ALTER TABLE `produtospdv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_loja` (`id_loja`);

--
-- Índices para tabela `venda`
--
ALTER TABLE `venda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_caixa` (`id_caixa`),
  ADD KEY `id_loja` (`id_loja`),
  ADD KEY `id_operador` (`id_operador`);

--
-- Índices para tabela `venda_metodopagamento`
--
ALTER TABLE `venda_metodopagamento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_metodoPagamento` (`id_metodoPagamento`),
  ADD KEY `id_venda` (`id_venda`);

--
-- Índices para tabela `venda_produtospdv`
--
ALTER TABLE `venda_produtospdv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_produto` (`id_produto`),
  ADD KEY `id_venda` (`id_venda`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `caixa`
--
ALTER TABLE `caixa`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT de tabela `loja`
--
ALTER TABLE `loja`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `metodo_pagamento`
--
ALTER TABLE `metodo_pagamento`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `movimentacoes_caixa`
--
ALTER TABLE `movimentacoes_caixa`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `operador`
--
ALTER TABLE `operador`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `produtospdv`
--
ALTER TABLE `produtospdv`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `venda`
--
ALTER TABLE `venda`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=392;

--
-- AUTO_INCREMENT de tabela `venda_metodopagamento`
--
ALTER TABLE `venda_metodopagamento`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=266;

--
-- AUTO_INCREMENT de tabela `venda_produtospdv`
--
ALTER TABLE `venda_produtospdv`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `caixa`
--
ALTER TABLE `caixa`
  ADD CONSTRAINT `id_loja_user` FOREIGN KEY (`id_loja`) REFERENCES `dbgestaoficha`.`usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `metodo_pagamento`
--
ALTER TABLE `metodo_pagamento`
  ADD CONSTRAINT `metodo_pagamento_ibfk_1` FOREIGN KEY (`id_loja`) REFERENCES `dbgestaoficha`.`usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `operador`
--
ALTER TABLE `operador`
  ADD CONSTRAINT `operador_ibfk_1` FOREIGN KEY (`id_loja`) REFERENCES `dbgestaoficha`.`usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `produtospdv`
--
ALTER TABLE `produtospdv`
  ADD CONSTRAINT `produtospdv_ibfk_1` FOREIGN KEY (`id_loja`) REFERENCES `dbgestaoficha`.`usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `venda`
--
ALTER TABLE `venda`
  ADD CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`id_caixa`) REFERENCES `caixa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `venda_ibfk_2` FOREIGN KEY (`id_loja`) REFERENCES `dbgestaoficha`.`usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `venda_ibfk_3` FOREIGN KEY (`id_operador`) REFERENCES `operador` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `venda_metodopagamento`
--
ALTER TABLE `venda_metodopagamento`
  ADD CONSTRAINT `venda_metodopagamento_ibfk_1` FOREIGN KEY (`id_metodoPagamento`) REFERENCES `metodo_pagamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `venda_metodopagamento_ibfk_2` FOREIGN KEY (`id_venda`) REFERENCES `venda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `venda_produtospdv`
--
ALTER TABLE `venda_produtospdv`
  ADD CONSTRAINT `venda_produtospdv_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produtospdv` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `venda_produtospdv_ibfk_2` FOREIGN KEY (`id_venda`) REFERENCES `venda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
