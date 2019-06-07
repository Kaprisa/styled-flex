import applyStyleModifiers from 'flexible-styled-components-modifiers';
import styled from 'styled-components';

import flexModifiers from './lib/flex';
import itemModifiers from './lib/item';

export default globalModifiers => {
    const applyStyleModifiersWithGlobal = applyStyleModifiers(globalModifiers);

    const applyFlexModifiers = applyStyleModifiersWithGlobal(flexModifiers);

    const Flex = styled.div`
        display: flex;
        ${applyFlexModifiers}
    `;

    const applyItemModifiers = applyStyleModifiersWithGlobal(itemModifiers);

    Flex.Item = styled.div`
      ${applyItemModifiers}
    `;

    return Flex;
}




