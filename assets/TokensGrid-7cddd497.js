import{j as e}from"./jsx-runtime-9f80c8b8.js";function i({tokens:r,hasRemValue:t=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),t&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(r).map(([s,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:n.toString().replace(/rem$/," rem").replace(/px$/," px").replace(/%$/," %")}),t&&e.jsx("td",{children:Number(n.toString().replace("rem","")*16)+" px"})]},s))})]})}try{i.displayName="TokensGrid",i.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string | number>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{i as T};
//# sourceMappingURL=TokensGrid-7cddd497.js.map
