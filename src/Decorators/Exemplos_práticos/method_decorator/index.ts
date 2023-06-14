function checkPost() {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value
    console.log(childFunction)
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log(`Post já foi feito!`)
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkPost()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Meu primeiro post!', newPost.alreadyPosted)
newPost.post('Meu segundo post!', newPost.alreadyPosted)
