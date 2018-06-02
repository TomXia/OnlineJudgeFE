<template>
  <div>
    <panel class="container">
      <div slot="title">编译器 & 评测机</div>
      <div class="content markdown-body">
        <ul>
          <li v-for="lang in languages">{{lang.name}} ( {{lang.description}} )
            <pre>{{lang.config.compile.compile_command}}</pre>
          </li>
        </ul>
      </div>
    </panel>

    <panel :padding="15" class="container">
      <div slot="title">Result Explanation</div>
      <div class="content">
        <ul>
          <li><b>Pending & Juding</b> : 您的提交在队列中, 请耐心等候评测结果</li>
          <li><b>Compile Error</b> :	您的提交未通过编译, 点击评测链接来查看编译器的输出.
      </li>
          <li><b>Accepted</b> :	祝贺,您的提交已通过评测.</li>
          <li><b>Wrong Answer</b> :	您的提交输出与标准答案不相符.</li>
          <li>
            <b>Runtime Error</b>
            :	您的程序未正常退出. 可能的原因有: 段错误, 除数为0或退出码非0.
          </li>
          <li><b>Time Limit Exceeded</b>
            :	您的程序使用的CPU时间超过限制. Java语言会拥有3倍的时间.
          </li>
          <li><b>Memory Limit Exceeded</b> : 您的程序使用的内存超过限制.</li>
          <li><b>System Error</b> :	评测机出现内部错误.请与管理员反馈并耐心等待恢复.
          </li>
        </ul>
      </div>
    </panel>

  </div>
</template>

<script>
  import utils from '@/utils/utils'

  export default {
    data () {
      return {
        languages: []
      }
    },
    beforeRouteEnter (to, from, next) {
      utils.getLanguages().then(languages => {
        next(vm => {
          vm.languages = languages
        })
      })
    }
  }
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;

    .content {
      font-size: 16px;
      margin: 0 50px 20px 50px;
      > ul {
        list-style: disc;
        li {
          line-height: 2;
          .title {
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
