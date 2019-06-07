## Styled flex

### Example

```js
import createFlex from 'styled-flex';

const globalModifiers = {
        m: {
            prop: 'margin',
            values: {
                '': 'margin',
                t: 'margin-top',
                b: 'margin-bottom',
                r: 'margin-right',
                l: 'margin-left'
            }
        },
        p: 'padding: ',
        flex: 'flex: ',
        w: 'width: ',
        h: 'height: ',
        color: (props, value) => `background-color: ${props.theme[value] || value};`,
        fontColor: (props, value) => `color: ${props.theme[value] || value};`
}

export const Flex = createFlex(globalModifiers);

const MyComponent = () => (
    <Flex aic jcc fdc w="100px">
        <Flex.Item as="span" asfs>
            First row with `align-self: flex-start`
        </Flex.Item>
        <div>
            Second row
        </div>
    </Flex>
)
```

### Modifiers

#### Flex
- jcc - justify-content: center
- jcfe - justify-content: flex-end
- jcsb - justify-content: space-between
- jcsa - justify-content: space-around
- aic - align-items: center
- aifs - align-items: flex-start
- aife - align-items: flex-end
- aib - align-items: baseline
- fdc - flex-direction: column
- fdrr - flex-direction:  row-reverse
- fdcr - flex-direction:  column-reverse
- fww - flex-wrap: wrap

#### Flex.Item
- order 
- flex
- asfs - align-self: flex-start 
- asfe - align-self: flex-end
- asc - align-self: center
- asb - align-self: baseline
- ass - align-self: stretch