import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    const handleAddToCart = () => onAddToCart(product.id, 1)

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.media.source}
                title={product.name}
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                </div>
            </CardContent>
            <CardActions disableSpacing className={product.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product