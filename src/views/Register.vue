<template>
  <div>
    <a-row>
      <a-col :span="12">
        <a-form-model
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          style="padding:20px;margin-left: 80px;margin-top: 60px; width: 400px;height:400px">
          <a-form-model-item>
            <strong style="font-size: 25px; color: cadetblue; margin-left: 40px">Register Now</strong>
          </a-form-model-item>
          <a-form-model-item label="Name" prop="name">
            <a-input
              v-model="form.name"
              placeholder="please input your name"
              style="width: 250px"/>
          </a-form-model-item>
          <a-form-model-item label="E-mail" prop="email">
            <a-input
              v-model="form.email"
              placeholder="please input the binding e-mail"
              style="width: 250px"/>
          </a-form-model-item>
          <a-form-model-item label="Password" prop="password">
          <a-input
            v-model="form.password"
            placeholder="please input the password"
            type="password"
            style="width: 250px"/>
          </a-form-model-item>
          <a-form-model-item label="Role" prop="role">
            <a-checkbox-group v-model="form.role">
              <a-checkbox value="p" name="play">
                player
              </a-checkbox>
              <a-checkbox value="d" name="develop">
                developer
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              Confirm
            </a-button>
            <a-drawer
              title="E-mail Confirm"
              placement="right"
              :closable="false"
              :visible="visible"
              :after-visible-change="afterVisibleChange"
              @close="onClose"
              width="520"
            >
              <a-form-model :model = "conForm">
                <a-form-model-item>
                  <p style="margin-left: 30px">
                    We have sent an account activation code to your e-mail box. Please enter the activation code in
                    the input box below
                  </p>
                </a-form-model-item>
                  <a-form-model-item style="width: 250px;margin-left: 50px">
                  <a-input v-model="conForm.confirm" placeholder="Activation code"/>
                </a-form-model-item>
                <a-form-model-item style="margin-left: 300px">
                  <a-button type="primary" @click="toConfirm">
                    Submit
                  </a-button>
                </a-form-model-item>
                <a-form-model-item>
                  <a-button type="primary" style="margin-left: 300px" @click="reSend">
                    Resend code
                  </a-button>
                </a-form-model-item>
              </a-form-model>
            </a-drawer>
            <a-button style="margin-left: 10px;">
              Cancel
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :span="12">
        <div><img
          src="https://www.sustech.edu.cn/wp-content/themes/twentyseventeen/images/sustech-logo-cn.png"
          alt="Game Pic"
          style="margin-left: 10px; margin-top: 150px; width: 600px"
        >
        </div>
      </a-col>
    </a-row>
<!--    <a-form-model-->
<!--      ref="ruleForm"-->
<!--      :model="form"-->
<!--      :rules="rules"-->
<!--      :label-col="labelCol"-->
<!--      :wrapper-col="wrapperCol"-->
<!--      style="padding:20px;margin-left: 80px;margin-top: 60px; width: 400px;height:400px">-->
<!--      <a-form-model-item label="Name">-->
<!--        <a-input-->
<!--          v-model="form.name"-->
<!--          placeholder="please input your name"-->
<!--          style="width: 250px"/>-->
<!--      </a-form-model-item>-->
<!--      <a-form-model-item label="E-mail">-->
<!--        <a-input-->
<!--          v-model="form.email"-->
<!--          placeholder="please input the binding e-mail"-->
<!--          style="width: 250px"/>-->
<!--      </a-form-model-item>-->
<!--      <a-form-model-item label="Password">-->
<!--      <a-input-->
<!--        v-model="form.password"-->
<!--        placeholder="please input the password"-->
<!--        type="password"-->
<!--        style="width: 250px"/>-->
<!--      </a-form-model-item>-->
<!--      <a-form-model-item label="Role">-->
<!--        <a-radio-group v-model="form.role">-->
<!--          <a-radio value="p">-->
<!--            Player-->
<!--          </a-radio>-->
<!--          <a-radio value="d">-->
<!--            Developer-->
<!--          </a-radio>-->
<!--        </a-radio-group>-->
<!--      </a-form-model-item>-->
<!--      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">-->
<!--        <a-button type="primary" @click="onSubmit">-->
<!--            Create-->
<!--          </a-button>-->
<!--        <a-button style="margin-left: 10px;">-->
<!--          Cancel-->
<!--        </a-button>-->
<!--      </a-form-model-item>-->
<!--    </a-form-model>-->
<!--    <div><img-->
<!--      src="https://www.sustech.edu.cn/wp-content/themes/twentyseventeen/images/sustech-logo-cn.png"-->
<!--      alt="Game Pic"-->
<!--      style="margin-left: 200px"-->
<!--    >-->
<!--    </div>-->
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'Register',
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        email: '',
        password: '',
        role: []
      },
      visible: false,
      conForm: {
        confirm: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input user name', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input user email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input account password', trigger: 'blur' }
        ],
        role: [
          { required: true, message: 'Please input account role', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.visible = true
      // this.$refs.ruleForm.validate(valid => {
      //   // 校验未全部通过，结束当前提交
      //   if (!valid) return false
      // })
      console.log('submit!', this.form)
      var tmp = ''
      if (this.form.role.length === 2) {
        tmp = 'dp'
      } else if (this.form.role[0] === 'd') {
        tmp = 'd'
      } else {
        tmp = 'p'
      }
      var that = this
      var obj = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        role: tmp
      }
      obj = qs.stringify(obj)
      this.$http.post('/api/user/register', obj)
        .then((response) => {
          if (response.status === 200) {
            that.$message.success('Register successfully')
          } else {
            // that.$message.error('Error!')
            this.$message.error(response.data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
      // this.$http.post('10.21.21.230/register', {
      //   name: this.form.name,
      //   email: this.form.email,
      //   password: this.form.password,
      //   role: this.form.role
      // })
      //   .then((response) => {
      //     console.log(response)
      //     if (response.status === 200) {
      //       that.$message.success('Register successfully')
      //     } else {
      //       that.$message.error('Error!')
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    },
    validatorEmail (rule, value, callback) {
      const phoneReg = /@+/
      if (!phoneReg.test(value)) {
        callback(new Error('Please input a valid e-mail'))
        return
      }
      callback()
    },
    validatorPassword (rule, value, callback) {
      const phoneReg = /[A-Z0-9]+/
      if (!phoneReg.test(value)) {
        callback(new Error('Please input a valid password'))
        return
      }
      callback()
    },
    afterVisibleChange (val) {
      console.log('visible', val)
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    toConfirm () {
      var objc = {
        email: this.form.email,
        confirm: parseInt(this.conForm.confirm)
      }
      objc = qs.stringify(objc)
      this.$http.post('/api/user/register/confirm', objc)
        .then((response) => {
          if (response.status === 200 && response.data.code === 0) {
            this.$message.success('Activate successfully')
          } else {
            // that.$message.error('Error!')
            this.$message.error(response.data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
      this.visible = false
    },
    reSend () {
      var objc = {
        email: this.form.email
      }
      objc = qs.stringify(objc)
      this.$http.post('/api/user/register/resend', objc)
        .then((response) => {
          if (response.status === 200 && response.data.code === 0) {
            this.$message.success('Activate successfully')
          } else {
            // that.$message.error('Error!')
            this.$message.error(response.data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
