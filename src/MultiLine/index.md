---
order: 9
---
# MultiLine

多行文本溢出省略效果


```jsx
import { MultiLine } from 'dufi';

export default () => <MultiLine text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa eget odio interdum venenatis. Sed vestibulum auctor odio, eu ullamcorper velit facilisis at. Maecenas et leo in odio dignissim sollicitudin. Vestibulum tincidunt lacinia eros, eu congue tortor malesuada vel. Fusce eleifend suscipit justo in fringilla. Vivamus vestibulum nisi sit amet hendrerit tristique. Integer fringilla volutpat suscipit. Nulla facilisi. Cras id metus vel nisi tempor pellentesque a nec justo. Suspendisse potenti." />
```

文本内容不足时

```jsx
import { MultiLine } from 'dufi';

export default () => <MultiLine text="Lorem ipsum dolor sit amet, consectetur adipiscin." />
```