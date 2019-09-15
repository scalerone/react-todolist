import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[
                // 'hello',
                // 'everyone',
                // 'learning'
            ],
            inputValue:''
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    addComment(){
        // alert('click')
        console.log('click')
        //this 指向的问题
        // this.state.list.push('start') //不能直接调用
        //要改变state的数据必须使用this.setState方法
        this.setState({
                // list:[...this.state.list,'start']
                list:[...this.state.list,this.state.inputValue],
               inputValue:'' //清空输入框
        })
       //[...this.state.list]  ...展开运算符类似于['hello', 'everyone','learning']

    }
    inputChange(e){
        console.log(e.target.value)
        this.setState({
            inputValue:e.target.value
        })
    }
    //面向dom转向面向数据编程
    render() {
        return (
            <div>
                {/*<input  onChange={this.inputChange.bind(this)}/>*/}
                <input value={this.state.inputValue} onChange={(e)=>this.inputChange(e)}/>
                <button onClick={this.addComment.bind(this)}>留言</button>
                <ul>
                    {/*<li>oneninnini</li>*/}
                    {/*<li>twoninnini</li>*/}
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default TodoList;