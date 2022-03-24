<template>
  <div class="flex flex-col items-center justify-center pt-10 px-4 md:h-screen">
    <p class="text-xl font-bold pt-3">HABILILDADES</p>
    <hr class="w-16 bg-gray-300 my-5" />

    <div class="flex flex-col md:flex-row w-screen items-center justify-center md:items-start">
      <div class="w-11/12 p-4 bg-gray-100 rounded-xl md:w-3/12 md:mr-10">
        <div class="flex justify-start mb-4">
          <img src="icons/code.svg" />
          <div class="flex flex-col pl-5">
            <span class="font-semibold">Frontend developer</span>
            <span class="text-base">Mais de 4 anos</span>
          </div>
        </div>
        <div class="w-full">
          <div>
            <div class="flex justify-between">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <progress id="html" value="95" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <progress id="css" value="90" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>JavaScript</span>
              <span>90%</span>
            </div>
            <progress id="javascript" value="90" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>React</span>
              <span>85%</span>
            </div>
            <progress id="react" value="85" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>Vue</span>
              <span>70%</span>
            </div>
            <progress id="vue" value="70" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>Angular</span>
              <span>65%</span>
            </div>
            <progress id="angular" value="65" max="100" />
          </div>
        </div>
      </div>

      <div class="w-11/12 p-4 bg-gray-100 rounded-xl mt-6 md:w-3/12">
        <div class="flex justify-start mb-4">
          <img src="icons/storage.svg" />
          <div class="flex flex-col pl-5">
            <span class="font-semibold">Backend developer</span>
            <span class="text-base">Mais de 4 anos</span>
          </div>
        </div>
        <div>
          <div>
            <div class="flex justify-between">
              <span>Node.js</span>
              <span>85%</span>
            </div>
            <progress id="nodejs" value="85" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>PHP</span>
              <span>75%</span>
            </div>
            <progress id="php" value="85" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>Java</span>
              <span>70%</span>
            </div>
            <progress id="java" value="70" max="100" />
          </div>
          <div>
            <div class="flex justify-between">
              <span>Python</span>
              <span>65%</span>
            </div>
            <progress id="python" value="65" max="100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Skills',
})
</script>

<style scoped>

progress {
  width: 100%;
  height: 10px;
}

progress::-webkit-progress-bar {
  border-radius: 7px;
  background: rgba(223, 210, 205, 0.7);
}

progress::-webkit-progress-value {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(191, 153, 138, 1) 97%,
    rgba(191, 153, 138, 1) 100%
  );
  border-radius: 7px;
  box-shadow: 1px 1px 5px 3px rgba(223, 210, 205, 0.7);
}
</style>