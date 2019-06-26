import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMCAxMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+Cjx0aXRsZT5qYXNvbi1sZW5nc3RvcmYtYmVhcmQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUwIC03NSkiPgo8ZyBpZD0iamFzb24tbGVuZ3N0b3JmLWJlYXJkIj4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1MCA3NSkiIGZpbGw9IiMxRTBEMkIiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMC44NjMxNzggMTcuNTYwN0MgMC44NjMxNzggMjMuMjk3NSAtMC4zODE2NTQgMjguOTcxNyAwLjg2MzE3OCAzNi4yMzMyQyAyLjQxOTIyIDQ1LjMxMDEgOC4zODQwNSA4MC41ODAzIDEyLjI3NDEgODguNjE5OUMgMTYuMTY0MiA5Ni42NTk0IDI0LjQ2MzEgMTIwIDUyLjk5MDUgMTIwQyA3My43NDE0IDEyMCA4My4zMzMzIDEwMS41ODcgODguMDAxNCA5MC45NTM5QyA5Mi42Njk1IDgwLjMyMSA5OC42MzQzIDU1LjY4MzcgOTkuNjcxNyAzNi4yMzMyQyAxMDAuNzA5IDE2Ljc4MjcgOTguODkzNyAwLjk2Mjk5MSA5OC4xMTU3IDAuMTg0OTcyQyA5Ny4zMzc2IC0wLjU5MzA0OCA5Ni4wNDA5IDEuMjIyMzMgOTYuMDQwOSAzLjAzNzcxTCA5Ni4wNDA5IDYuNjY4NDdDIDkxLjU0NTcgNi43NTQ5MSA4MC43OTE3IDcuMTM1MjggNzMuNzM3NyA3Ljk2NTE3QyA2NC45MjAyIDkuMDAyNTIgNTcuNjU4NiAxMS44NTUzIDU1Ljg0MzMgMTIuODkyNkMgNTQuMDI3OSAxMy45MyA1Mi45OTA1IDEzLjY3MDYgNTAuMzk3MSAxMy42NzA2QyA0Ny44MDM3IDEzLjY3MDYgNDYuNTA3IDE0LjQ0ODcgNDMuOTEzNiAxMy42NzA2QyA0MS4zMjAyIDEyLjg5MjYgMzMuNzk5NCAxMS4zMzY2IDI5LjY0OTkgMTEuMzM2NkMgMjUuNTAwNSAxMS4zMzY2IDE1LjkwNDkgMTIuMTE0NiAxMC45Nzc0IDEyLjg5MjZDIDYuMDQ5OTkgMTMuNjcwNiA0Ljc1MzI5IDEzLjY3MDYgNC4yMzQ2MSAxMy42NzA2QyAzLjcxNTkzIDEzLjY3MDYgMy43MTU5MyA5LjUyMTIgMS45MDA1NSA4LjIyNDVDIDAuMDg1MTc0MyA2LjkyNzgxIC0wLjE3NDE2NiA3LjE4NzE1IDAuMDg1MTc0MiA5LjI2MTg2QyAwLjM0NDUxNCAxMS4zMzY2IDAuODYzMTc4IDE0LjE4OTMgMC44NjMxNzggMTcuNTYwN1pNIDExLjc1NTUgMzIuNjAyNUMgOS40MjE0IDMwLjAwOTEgOC45MDI3MiAyNC44MjIzIDguOTAyNzIgMTkuODk0OEMgOC45MDI3MiAxNi4yNjQgMTMuMzExNSAxNS4yMjY3IDIwLjgzMjQgMTQuMTg5M0MgMjguMzUzMiAxMy4xNTIgMzUuMzU1NCAxNC4xODkzIDM5LjUwNDggMTUuMjI2N0MgNDMuNjU0MyAxNi4yNjQgNDYuMjQ3NyAxOS4zNzYxIDQzLjEzNTYgMjYuMzc4M0MgNDAuMDIzNSAzMy4zODA1IDM4LjcyNjggMzUuNDU1MiAyNy44MzQ1IDM2LjIzMzJDIDE2Ljk0MjMgMzcuMDExMiAxNC4wODk1IDM1LjE5NTkgMTEuNzU1NSAzMi42MDI1Wk0gNzMuNzM3NyAxMC4yOTkyQyA2My42MjM1IDExLjMzNjYgNTguOTU1MyAxMy42NzA2IDU3LjEzOTkgMTYuNzgyN0MgNTYuNjIxMyAxOC4zMzg4IDU2LjYyMTMgMjAuNjcyOCA1OS43MzMzIDI2LjM3ODNDIDYyLjg0NTQgMzIuMDgzOCA2NS4xNzk1IDMzLjEyMTEgNzIuOTU5NyAzMi44NjE4QyA4MC43Mzk5IDMyLjYwMjUgODYuOTY0IDMxLjA0NjQgODkuNTU3NCAyOC43MTI0QyA5Mi4xNTA4IDI2LjM3ODMgOTMuNDQ3NSAxNy44MjAxIDkyLjE1MDggMTMuNjcwNkMgOTAuODU0MSA5LjUyMTIgODMuODUxOSA5LjI2MTg2IDczLjczNzcgMTAuMjk5MlpNIDk4LjExNTcgMjYuMzc4M0MgOTguMTE1NyAyMS42MDY0IDk3LjQyNDEgMTYuMjY0IDk3LjA3ODMgMTQuMTg5M0MgOTYuNzMyNSAxNC4xODkzIDk1Ljg4NTMgMTQuNTAwNSA5NS4yNjI5IDE1Ljc0NTRDIDk0LjQ4NDkgMTcuMzAxNCA5NC40ODQ5IDIyLjQ4ODIgOTMuMTg4MiAyNi4zNzgzQyA5MS44OTE1IDMwLjI2ODQgODguNzc5NCAzMS44MjQ0IDgyLjI5NTkgMzMuMzgwNUMgNzUuODEyNCAzNC45MzY1IDY5LjU4ODIgMzQuOTM2NSA2NS4xNzk1IDM0LjE1ODVDIDYwLjc3MDcgMzMuMzgwNSA1Ni44ODA2IDI2Ljg5NyA1NS41ODM5IDIzLjUyNTZDIDU0LjI4NzIgMjAuMTU0MSA1My43Njg1IDE4LjU5ODEgNTAuMzk3MSAxOC44NTc0QyA0Ny4wMjU3IDE5LjExNjggNDYuNTA3IDIwLjkzMjIgNDYuNTA3IDIyLjQ4ODJDIDQ2LjUwNyAyNC4wNDQyIDQ0LjQzMjMgMjkuNzQ5NyA0Mi42MTY5IDMyLjYwMjVDIDQwLjgwMTUgMzUuNDU1MiAzNy4xNzA4IDM4LjA0ODYgMjUuNzU5OCAzOC4wNDg2QyAxNC4zNDg5IDM4LjA0ODYgMTEuNzU1NSAzNi4yMzMyIDEwLjE5OTQgMzQuMTU4NUMgOC42NDMzOCAzMi4wODM4IDcuMzQ2NjggMjYuMzc4MyA2LjMwOTMyIDIzLjUyNTZDIDUuNDc5NDMgMjEuMjQzNCAzLjM3MDEzIDIwLjg0NTcgMi40MTkyMiAyMC45MzIyTCAyLjQxOTIyIDI2Ljg5N0MgMi40MTkyMiAzMC4yNjg0IDIuNDE5MjIgMzIuODYxOCA0LjIzNDYxIDM3LjUyOTlDIDYuMDUwMDEgNDIuMTk4IDYuMzA5MzIgNDcuMTUyNiA4LjEyNDcgNTIuNTcxNkMgOS45NDAwNyA1Ny45OTA3IDEzLjA1MjIgNTcuNzU4NCAxNi40MjM2IDYwLjA5MjVDIDE5Ljc5NSA2Mi40MjY1IDIwLjgzMjQgNjYuODM1MyAyNC40NjMxIDY2LjA1NzNDIDI2LjY0NDUgNjUuNTg5OSAyMy45NDQ0IDYxLjY0ODUgMjYuMjc4NSA1NS45NDNDIDI4LjYxMjUgNTAuMjM3NiAzOS41MDQ4IDQ3LjkwMzUgNDMuOTEzNiA0Ny4xNTI2QyA0OC4zMjI0IDQ2LjQwMTYgNDkuNjE5MSA0Ny45MDM1IDUyLjIxMjUgNDcuOTAzNUMgNTQuODA1OSA0Ny45MDM1IDU1Ljg0MzMgNDYuMzQ3NSA1Ny45MTggNDUuODI4OEMgNTkuOTkyNyA0NS4zMTAxIDY4LjI5MTUgNDQuNzkxNCA3NS4yOTM3IDQ2Ljg2NjFDIDgyLjI5NTkgNDguOTQwOSA4MC42OTg4IDU1LjkwOTQgODAuMjIxMiA1OC41MzY0QyA3OS43MDI1IDYxLjM4OTIgNzkuNzQ4MSA2My4yNzU4IDgwLjczOTkgNjIuOTQ1MkMgODMuMDczOSA2Mi4xNjcyIDg0Ljc5MTQgNjEuMzYxNiA4Ni45NjQgNTcuNDk5MUMgODkuMjk4MSA1My4zNDk2IDkxLjExMzUgNTEuNTM0MyA5NC40ODQ5IDQ2Ljg2NjFDIDk3Ljg1NjMgNDIuMTk4IDk4LjExNTcgMzIuMzQzMSA5OC4xMTU3IDI2LjM3ODNaTSA1OC40MzY2IDU4LjUzNjRDIDU2Ljg4MDYgNTguMDE3OCA1NC44MDU5IDU2LjIwMjQgNTMuMjQ5OCA1Ni4yMDI0QyA1MC45MTU4IDU2LjIwMjQgNDguMzIyNCA2MC4zNTE4IDQzLjY1NDMgNTkuODMzMUMgMzguOTg2MSA1OS4zMTQ1IDM0LjMxOCA1OS4zMTQ1IDMzLjI4MDcgNjEuMzg5MkMgMzIuMjQzMyA2My40NjM5IDM0LjMxOCA3MC4yMDY3IDM2LjY1MjEgNzIuMDIyMUMgMzguOTg2MSA3My44Mzc1IDQzLjkxMzYgNjkuNjg4MSA0Ny4wMjU3IDcwLjQ2NjFDIDUwLjEzNzcgNzEuMjQ0MSA1MS4xNzUxIDcwLjIwNjcgNTMuMjQ5OCA3MC4yMDY3QyA1NS4zMjQ2IDcwLjIwNjcgNTcuMTM5OSA3MS4yNDQxIDYxLjU0ODcgNjkuNjg4MUMgNjUuOTU3NSA2OC4xMzIgNjYuNzM1NSA3MS43NjI4IDY5LjA2OTYgNzAuMjA2N0MgNzEuNDAzNiA2OC42NTA3IDcxLjkyMjMgNjIuMTY3MiA3Mi45NTk3IDYwLjM1MThDIDczLjk5NyA1OC41MzY0IDczLjk5NyA1Ny40OTkxIDcxLjkyMjMgNTYuOTgwNEMgNjkuODQ3NiA1Ni40NjE3IDU5Ljk5MjcgNTkuMDU1MSA1OC40MzY2IDU4LjUzNjRaIi8+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Jason Lengstorf" />
      <h1>Happy birthday Jason Lengstorf!</h1>
      <p>Thank you for <em>everything</em> you do for the amazing Gatsby community.</p>
      <span style={{ display: `none`, }}>P.S. Secret party at Jason's place tonight...</span>
    </div>
  </Layout>
)

export default IndexPage
