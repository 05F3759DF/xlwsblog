<template>
  <div>
    <textarea id="ckeditor" v-model="input">
    </textarea>
  </div>
  {{input}}
</template>

<script>
  export default {
    data() {
      return {
        input: '',
      }
    },
    ready() {
      let ckeditor = CKEDITOR.replace('ckeditor')
      ckeditor.on( 'change', function( evt ) {
        this.input = evt.editor.getData()
        console.log('get' + this.input)
      })
    },
    methods: {
      test() {
        let data = CKEDITOR.instances.ckeditor.getData()
        console.log(data)
      },
    }
  }
</script>

<style>
  html, body, .editor {
    display: inline;
    margin: 0;
    height: 100%;
    font-family: 'Times New Roman', Arial, sans-serif;
    color: #333;
  }
</style>
