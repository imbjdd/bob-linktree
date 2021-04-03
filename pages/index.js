import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bob Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="flex justify-center mt-20">
          <div>
            <div class="animate-bounce">
              <Image
                src="/images/profile.jpeg"
                alt="Picture of the author"
                width={144}
                height={144}
                class="rounded-full"
              />
            </div>
            <div class="content-center">
              <p class="text-4xl font-bold text-black text-center content-center text-blue-500">Bobbie</p>
            </div>
          </div>
        </div>
        <div class="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black"><a href="https://github.com/6346563751">Github</a></div>
            <p class="text-gray-500">I ❤️ the Open Source philosophy !</p>
          </div>
        </div>
        <div class="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black"><a href="https://www.codingame.com/profile/9230a20793ed86660398935aec2932989737173">Codingame</a></div>
            <p class="text-gray-500">Want to challenge me ? 💻</p>
          </div>
        </div>
        <div class="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black"><a href="https://discord.gg/35GVvheEj6">Discord Bluekeys</a></div>
            <p class="text-gray-500">One of the greatest 🧑‍🤝‍🧑 communauty !</p>
          </div>
        </div>
      </main>
    </div>
  )
}
