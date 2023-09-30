import{j as e}from"./jsx-runtime-9f80c8b8.js";import{M as c,u as j,B as d,f as y,T as m,S as T,c as w,d as B,a as o}from"./index-124bcc87.js";import{r as a}from"./index-cb9ba028.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const S={title:"Data display/Modal",component:c,tags:["autodocs"],decorators:[(h,p)=>{const s=a.useRef(null),{handleClose:u,handleOpen:x,isOpen:f}=j({dialogRef:s}),[n,g]=a.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(d,{className:n?y:"",children:[e.jsx(m,{as:"label",size:"sm",htmlFor:"switchTheme",children:"Switch"}),e.jsx(T,{CheckedIcon:w,UncheckedIcon:B,onCheckedChange:()=>g(!n),isActive:n}),h({args:{...p.args,isOpen:f,handleClose:u,handleOpen:x,ref:s,"aria-haspopup":"true"}})]})})}]},t={args:{children:[e.jsx(o,{children:"The trigger Element"},"test"),e.jsxs(d,{css:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(m,{css:{marginBlock:"$2"},children:"MEU MODAL"}),e.jsx(o,{size:"sm",children:"Opa"})]},"test2")]},parameters:{docs:{description:{story:`To use the modal component you need to pass two \`childrens\` for it.
 The first one will be the trigger element that will open the modal, and the second one will be the content of the modal.

`}}}};c.displayName="Modal";var r,l,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [<Button key={'test'}>The trigger Element</Button>, <Box css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }} key={'test2'}>
        <Text css={{
        marginBlock: '$2'
      }}>MEU MODAL</Text>
        <Button size={'sm'}>Opa</Button>
      </Box>]
  },
  parameters: {
    docs: {
      description: {
        story: 'To use the modal component you need to pass two \`childrens\` for it.\\n The first one will be the trigger element that will open the modal, and the second one will be the content of the modal.\\n\\n'
      }
    }
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["Example"];export{t as Example,b as __namedExportsOrder,S as default};
//# sourceMappingURL=Modal.stories-fe287263.js.map
