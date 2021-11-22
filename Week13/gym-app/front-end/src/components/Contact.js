import React, { Component } from 'react';
import {MainDiv, ContactHeader, FormButton, FormInput, FormTextArea, FormDiv, ContactDiv } from '../index.css'

export default class About extends Component {
    render() {
        return (
        <MainDiv>
            <div>
                <img src="https://media.istockphoto.com/photos/preparation-for-gymnastic-bars-picture-id466187861?k=20&m=466187861&s=612x612&w=0&h=ZfKr27_-sqymjT6177MTQJNnlC84H7eVgsH5P7QiTQY=" alt="" />
            </div>
            <ContactDiv>
            <ContactHeader>Contact Us</ContactHeader>
            <form>
                <FormDiv>
                <ContactHeader>Contact Us</ContactHeader>
                <FormInput type="text" placeholder="Name"/>
                <FormInput type="email" placeholder="Email" />
                <FormInput type="text" placeholder="Subject"/>
               <FormTextArea name="" id="" cols="30" rows="10" placeholder="Message"></FormTextArea>
               <FormButton type="submit">Submit</FormButton>
               </FormDiv>
            </form>
            </ContactDiv>
        </MainDiv>
        )
    }      
}