﻿#pragma checksum "..\..\Document.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6C2333DC999DA4674D8DA1F67743DA2378EC52F5"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace FlowDocumentNewsClient {
    
    
    /// <summary>
    /// DockPanel1
    /// </summary>
    public partial class DockPanel1 : System.Windows.Controls.DockPanel, System.Windows.Markup.IComponentConnector {
        
        
        #line 32 "..\..\Document.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Documents.FlowDocument fd1;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/FlowDocumentNewsClient;component/document.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\Document.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            
            #line 10 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.ColWidest);
            
            #line default
            #line hidden
            return;
            case 2:
            
            #line 11 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.ColMore);
            
            #line default
            #line hidden
            return;
            case 3:
            
            #line 12 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.ColAverage);
            
            #line default
            #line hidden
            return;
            case 4:
            
            #line 13 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.ColFewer);
            
            #line default
            #line hidden
            return;
            case 5:
            
            #line 14 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.ColLeast);
            
            #line default
            #line hidden
            return;
            case 6:
            
            #line 19 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.TextLargest);
            
            #line default
            #line hidden
            return;
            case 7:
            
            #line 20 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.TextLarge);
            
            #line default
            #line hidden
            return;
            case 8:
            
            #line 21 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.TextAverage);
            
            #line default
            #line hidden
            return;
            case 9:
            
            #line 22 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.TextSmall);
            
            #line default
            #line hidden
            return;
            case 10:
            
            #line 23 "..\..\Document.xaml"
            ((System.Windows.Controls.MenuItem)(target)).Click += new System.Windows.RoutedEventHandler(this.TextSmallest);
            
            #line default
            #line hidden
            return;
            case 11:
            this.fd1 = ((System.Windows.Documents.FlowDocument)(target));
            return;
            }
            this._contentLoaded = true;
        }
    }
}

