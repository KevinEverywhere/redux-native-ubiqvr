import React, { Component } from 'react';
import { Alert, View, Button, Text, StyleSheet } from 'react-native';
import sha256 from 'crypto-js/sha256';

class Block {
  constructor(index, timestamp, data, previousHash = ''){
    this.index=index;
    this.timestamp=timestamp;
    this.data=data;
    this.previousHash=previousHash;
    this.hash=this.calculateHash();
    this.nonce=0;
  }
  mineBlock(difficulty){
    while(this.hash.substring(0,difficulty)!==Array(difficulty+1).join("0")){
      this.nonce++;
      this.hash=this.calculateHash();
    }
  }
  calculateHash(){
    return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+this.nonce).toString();
  }
}

export default class BlockChain extends Component {
  constructor(props){
    super(props);
    this.state={
      fireAll:false,
      totalCost:0,
      totalAttempts:0,
      msg:'Add a block when ready.',
      timeToLoad:0,
      difficult:2,
      blocked:'Not loaded yet',
      chain:[this.createGenesisBlock()]};
    this.maxVal=5;
    this.minVal=1;
    this.maxBlocks=10;
    this.deepState=null;
  }
  getLatestBlock(){
    return this.state.chain[this.state.chain.length-1];
  }
  addBlock(blockObj){
    this.deepState=new Date().getTime();
    blockObj.previousHash=this.getLatestBlock().hash;
    blockObj.mineBlock(this.state.difficult);
    const newChain = this.state.chain;
    newChain.push(blockObj);
    const ttl=new Date().getTime()-this.deepState;
    const newTTL=this.state.totalCost+ttl;
    this.setState({chain:newChain,timeToLoad:ttl,totalCost:newTTL})
  }
  isChainValid(){
    for(let i = 1; i <this.chain.length;i++){
      const currentBlock=this.state.chain[i]
      const previousBlock=this.state.chain[i-1];
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      if(previousBlock.hash !== currentBlock.previousHash){
        return false;
      }
      return true;
    }
  }
  _refresh = evt => {
    this.setState({msg:'The blockchain has been refreshed.',totalAttempts:0,totalCost:0,timeToLoad:0,fireAll:false,chain:[this.createGenesisBlock()]});
  }
  _add = evt =>{
    if(this.state.chain.length<this.maxBlocks+1){
      this.setState({fireAll:false,msg:'Block is being mined...'});
      const me=this;
      setTimeout(()=>{me._postadd()},50);
    }else{
      Alert.alert(
        'Ten Blocks maximum',
        'This example of a Proof of Work has small limits for education purposes only. You must refresh the blockchain.'
      );
    }
  }
  _addAll = evt =>{
    if(this.state.difficult<this.maxVal){
        Alert.alert(
          'Adding Maximum Blocks resets Chain',
          'Adding maximum blocks will reset your chain. It will end when the maximum blocks length is reached.',[
            {text: 'Initiate Chain Building', onPress: () => this._pressAddAll()},
              {text: 'Cancel', onPress: () =>  console.log('canceled')},
          ],
          { cancelable: true }
        );
    }else{
      Alert.alert('Max Zeroes',`The difficulty permitted is between 1 and 5 zeroes. You currently have ${this.state.difficult}`);
    }
  }
  _postadd = evt =>{
    this.addBlock(new Block(Math.round(Math.random()*99999),new Date(),{IHOPE:'I am minable'}))
    this.setState({totalAttempts:this.state.totalAttempts+this.getLatestBlock().nonce,blocked:this.getLatestBlock().hash,msg:`It took ${this.state.timeToLoad/1000} seconds, mining ${this.getLatestBlock().nonce} times, to load the latest of ${this.state.chain.length-1} blocks. Total time for blockchain creation ${this.state.totalCost/1000} seconds.`});
  }
  _postaddall = evt =>{
    while(this.state.chain.length<this.maxBlocks+1){
      this.addBlock(new Block(Math.round(Math.random()*99999),new Date(),{IHOPE:'I am minable'}))
      this.setState({blocked:this.getLatestBlock().hash,msg:`It took ${this.state.timeToLoad/1000} seconds, mining ${this.getLatestBlock().nonce} times, to load the latest of ${this.state.chain.length-1} blocks. Total time for blockchain creation ${this.state.totalCost/1000} seconds.`});
    }
    console.log('postaddall finished');
  }
  _pressAddAll = () =>{
    this.setState({
      fireAll:true,
      msg:'Blocks are being mined...',
      chain:[this.createGenesisBlock()],
      totalAttempts:0,
      timeToLoad:0,
      totalCost:0,
    });
    const me=this;
    setTimeout(()=>{me._postaddall()},50);
  }
  _pressAdd = evt =>{
    if(this.state.difficult<this.maxVal){
      if(this.state.chain.length>1){
        Alert.alert(
          'Adding Difficulty resets Chain',
          'Adding Difficulty will reset your chain.',
          [
            {text: 'Increase Difficulty', onPress: () => this.setState({msg:'Add a block when ready.',fireAll:false,chain:[this.createGenesisBlock()],totalAttempts:0,timeToLoad:0,totalCost:0,difficult:Math.min(this.maxVal,this.state.difficult+1)})},
            {text: 'Cancel', onPress: () =>  console.log('canceled')},
          ],
          { cancelable: true }
        );
      }else{
        this.setState({msg:'Add a block to calculate load time.',fireAll:false,difficult:Math.min(this.maxVal,this.state.difficult+1)});
      }
    }else{
      Alert.alert('Max Zeroes',`The difficulty permitted is between 1 and 5 zeroes. You currently have ${this.state.difficult}`);
    }
  }
  _pressSub = evt =>{
    if(this.state.difficult>this.minVal){
      if(this.state.chain.length>1){
        Alert.alert(
          'Lowering Difficulty resets Chain',
          'Lowering Difficulty will reset your chain.',
          [
            {text: 'Decrease Difficulty', onPress: () => this.setState({msg:'Add a block when ready.',fireAll:false,chain:[this.createGenesisBlock()],totalAttempts:0,timeToLoad:0,totalCost:0,difficult:Math.max(this.minVal,this.state.difficult-1)})},
            {text: 'Cancel', onPress: () =>  console.log('canceled')},
          ],
          { cancelable: true }
        );
      }else{
        this.setState({msg:'Add a block to calculate load time.',difficult:Math.max(this.minVal,this.state.difficult-1)});
      }
    }
  }
  createGenesisBlock(){
    return new Block(0,new Date(),'Genesis');
  }
  render() {
    if(this.props.style==='inactive'){
      return null;
    }
    let blockstring=<Text>Please add a block to begin.</Text>;
    const styles = StyleSheet.create({
      bodyStyle: {
        flex: 1,
        flexDirection: 'column',
        position:'relative',
        zIndex:1000,
        left:0,
        top:0,
        right:0,
        bottom:0,
        alignSelf: 'stretch',
        alignItems: 'stretch',
        height: '100%',
        margin:10
      },
      baseText: {
        fontFamily: 'Arial',
        width:250,
        height:200,
      },
      titleText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
      },
      bodyText: {
        flex: 1,
        fontSize: 16,
      },
      midSection:{
        flex:4,
      },
      footer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        flexGrow: 1,
        justifyContent: 'center',
        padding: 0,
        margin: 0,
      },
      btn:{
        flex: 0.25,
      },
      aboveFooter:{
        flex:1,
      }
    });
    if(this.props.fullScreen && this.props.fullScreen === true){
      styles.bodyStyle = {
        flex: 1,
        flexDirection: 'column',
        position:'absolute',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        zIndex:1000,
        left:0,
        top:0,
        right:0,
        bottom:0,
        margin:10
      };
    }
    if(this.state.chain.length>1){
      blockstring=this.state.chain.map((block, index)=>{
        if(index>0){
          return <Text key={index}>- {block.hash.substring(0,20)}...</Text>
        }
      });
    }
    return (
      <View style={styles.bodyStyle}>
          <Text style={styles.titleText}>BlockChain {this.props.style} Technologies</Text>
          <Text style={styles.bodyText}>A BlockChain is made up of an unbroken chain of encrypted blocks. It is created here by requiring the first characters to be 0 (zero). Following is a list of Blocks with {this.state.difficult} starting zeroes.</Text>
          <View style={styles.midSection}>{ blockstring }</View>
          <Text style={styles.aboveFooter}>{this.state.msg}</Text>
          <View style={styles.footer}>
            <Button style={styles.btn} onPress={this._pressAdd} title="Harder"></Button>
            <Button style={styles.btn} onPress={this._pressSub} title="Easier"></Button>
            <Button style={styles.btn} onPress={this._add} title="Add Block"></Button>
            <Button style={styles.btn} onPress={this._addAll} title="Fill Chain"></Button>
            <Button style={styles.btn} onPress={this._refresh} title="Refresh Chain"></Button>
          </View>
      </View>);
    }
}
