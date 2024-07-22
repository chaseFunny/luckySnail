import * as iconList from '~/assets'
import { Container } from '~/components/ui/Container'

export default function IconPage() {
  console.log(iconList, 'iconList')

  return (
    <Container>
      <div className="flex flex-wrap gap-4">
        {Object.keys(iconList).map((key) => {
          const Icon = iconList[key]
          return (
            <div key={key} className=" mt-20 flex flex-col items-center">
              <Icon className="h-8 w-8" />
              <div className="text-xs">{key}</div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
