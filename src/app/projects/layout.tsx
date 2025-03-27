import { PropsWithChildren } from "react";




export default function LayoutProjects({ children }: PropsWithChildren) {
  return (
    <div id="LayoutProjects">
      <section>
        {children}
      </section>
    </div>
  )
}