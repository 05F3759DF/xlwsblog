<template>
  <div id="editor">
    <textarea v-model="input" debounce="150" @keydown.9="processTab"></textarea>
    <div v-html="input | marked"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '# Title',
        tabWidth: 2,
      }
    },
    methods: {
      processTab(event) {
        let src = event.srcElement
        event.returnValue = false
        let selectionEnd = event.srcElement.selectionEnd
        let selectionStart = event.srcElement.selectionStart
        let content = src.value
        if (selectionStart === selectionEnd) {
          content = content.substring(0, selectionStart) +
            ' '.repeat(this.tabWidth) +
            content.substring(selectionEnd, content.length)
          selectionStart = selectionStart + this.tabWidth
          selectionEnd = selectionEnd + this.tabWidth
        } else {
          let lines = content.substring(selectionStart, selectionEnd).split('\n')
          let totalLength = 0
          for (let i = 0; i < lines.length; i++) {
            content = content.substring(0, selectionStart + totalLength) +
              ' '.repeat(this.tabWidth)  +
              content.substring(selectionStart + totalLength, content.length)
            totalLength += this.tabWidth + lines[i].length + 1
          }
          selectionEnd += this.tabWidth * lines.length
        }
        src.value = content
        src.selectionStart = selectionStart
        src.selectionEnd = selectionEnd
      },
    },
    filters: {
      marked: require('marked'),
    },
  }
</script>

<style>
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
