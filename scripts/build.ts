import { readFile } from 'fs-extra'
import globby from 'globby'

const toNuxtCa = async () => {
  // get filles

  const paths = await globby('src/components', { absolute: false, cwd: '' })

  for (const filePath of paths) {
    const context = await readFile(filePath, { encoding: 'utf8' })

    //context.replace(/import { defineComponent } from 'vue-demi'/)

    console.log(context)
  }

  // console.log(paths)

  //readFile(srcPath, { encoding: 'utf8' })

  // copy files
  // transform ts
  // transform composition-api
  // transform tailwind
}

toNuxtCa()
