import * as path from "path"
import type { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const biographies = await graphql<BiographyProps>(`
    {
      allBiographiesJson {
        nodes {
           uid
           title
           begin_date
           end_date
           description
        }
      }
    }
  `)

  type Biography = {
    uid: number,
    title: string,
    description: string,
    begin_date: string,
    end_date: string
  }

  type BiographyProps = {
    allBiographiesJson: {
      nodes: Biography[]
    }
  }

  biographies.data?.allBiographiesJson.nodes.forEach((biography: Biography) => {
    actions.createPage({
      path: "/biographies/" + biography.uid,
      component: path.resolve("./src/templates/biography.tsx"),
      context: { uid: biography.uid },
    })
  })
}
