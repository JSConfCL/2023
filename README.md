## Correr el sitio

```
yarn && yarn dev
```

## Como llamar data de contentful

- Crear archivo `.graphql` con la query

- Asegurarse que la query tenga "nombre"

  ```
  query AssetCollection {
      assetCollection {
          total
          skip
          limit
      }
  }
  ```

  y no

  ```
  {
    assetCollection {
        total
        skip
        limit
    }
  }
  ```

- Correr `yarn generate` para generar archivos, tipos de typescript, hooks y useQueries de graphql.

- Usar los hooks generados :)

### Información de como contententful estructura su api de graphql

- https://www.contentful.com/developers/docs/references/graphql/

## Como se deploya?

- Solo mergear a MAIN :)

  - Tenemos un hook en cloudflare que deploya automáticamente cuando mergea a main

- Cambiando data de contentful:
  - Tenemos un hook en contentful q llama a cloudflare para deployear cuando publicamos/despublicamos una entrada

## TODO:

- [ ] Github Actions para eslint/prettier
- [ ] Husky con prettier/eslint
- [ ] Preview links?
