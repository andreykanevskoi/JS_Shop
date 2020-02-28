SELECT
  `Cart`.`USER_ID`,
  `Cart`.`CART_ID`,
  `Products`.`PRODUCT_ID` AS `Products.PRODUCT_ID`,
  `Products`.`PRODUCT_DESC` AS `Products.PRODUCT_DESC`,
  `Products`.`PRODUCT_NAME` AS `Products.PRODUCT_NAME`,
  `Products->CartToProduct`.`CART_ID` AS `Products.CartToProduct.CART_ID`,
  `Products->CartToProduct`.`PRODUCT_AMOUNT` AS `Products.CartToProduct.PRODUCT_AMOUNT`,
  `Products->CartToProduct`.`PRODUCT_ID` AS `Products.CartToProduct.PRODUCT_ID`
FROM
  `CART` AS `Cart`
  LEFT OUTER JOIN (
    `CART_TO_PRODUCT` AS `Products->CartToProduct`
    INNER JOIN `PRODUCT` AS `Products` ON `Products`.`PRODUCT_ID` = `Products->CartToProduct`.`PRODUCT_ID`
  ) ON `Cart`.`CART_ID` = `Products->CartToProduct`.`PRODUCT_ID`;