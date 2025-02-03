# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Ejemplo de uso

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card'
```

```
<ProductCard
        product={ product }
        initialValues={{
        count: 4,
        maxCount: 10
        } }
>
    {
    ( { reset, count, isMaxCountReached, maxCount, increaseBy }) => (
						<>
							<ProductImage/>
							<ProductTitle/>
							<ProductButtons />
						</>
					)
    }
</ProductCard>
```