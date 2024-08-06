/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  import React from "react"
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module "*.svg?url" {
  const content: any
  export default content
}
