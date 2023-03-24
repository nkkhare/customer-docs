import {
    filterDocCardListItems,
    useCurrentSidebarCategory
  } from "@docusaurus/theme-common";
  import DocCardList from "@theme/DocCardList";
  import GithubSlugger from "github-slugger";
  import React from "react";
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';


  function SectionedDocCardListForCurrentSidebarCategory({ className }) {
    const category = useCurrentSidebarCategory()
    return <SectionedDocCardList items={category.items} className={className} />
  }
  
  export default function SectionedDocCardList(props) {
    const { items, className } = props
    if (!items) {
      return <SectionedDocCardListForCurrentSidebarCategory {...props} />
    }
  
    const filteredItems = filterDocCardListItems(items)
    const githubSlugger = new GithubSlugger()
  
    return (
      <>
        <DocCardList
          items={filteredItems.filter(item => item.type !== "category")}
          className={className}
          
        />
        {filteredItems.map((item, index) =>
          item.type === "category" ? (
            <div key={index}>

              <h2 className="anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module">
                {item.label}
                <a
                  className="hash-link"
                  href={`#${githubSlugger.slug(item.label)}`}
                  title="Direct link to heading"
                >
                  {"​"}
                </a>
              </h2>
              <p>{item.description}</p>
              <DocCardList items={item.items} className={className} />
            </div>
          ) : null
        )}
      </>
    )
  }
  