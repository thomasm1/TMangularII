﻿#pragma checksum "..\..\MainWindow.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "DEEC9C61378DEA91423BA094ACCEE8577B8275D5"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using DataBindingDemo;
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


namespace DataBindingDemo {
    
    
    /// <summary>
    /// MainWindow
    /// </summary>
    public partial class MainWindow : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 53 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.CheckBox Grouping;
        
        #line default
        #line hidden
        
        
        #line 58 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.CheckBox Filtering;
        
        #line default
        #line hidden
        
        
        #line 63 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.CheckBox Sorting;
        
        #line default
        #line hidden
        
        
        #line 70 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListBox Master;
        
        #line default
        #line hidden
        
        
        #line 79 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ContentControl Detail;
        
        #line default
        #line hidden
        
        
        #line 83 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button OpenAddProduct;
        
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
            System.Uri resourceLocater = new System.Uri("/DataBindingDemo;component/mainwindow.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\MainWindow.xaml"
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
            this.Grouping = ((System.Windows.Controls.CheckBox)(target));
            
            #line 54 "..\..\MainWindow.xaml"
            this.Grouping.Checked += new System.Windows.RoutedEventHandler(this.AddGrouping);
            
            #line default
            #line hidden
            
            #line 54 "..\..\MainWindow.xaml"
            this.Grouping.Unchecked += new System.Windows.RoutedEventHandler(this.RemoveGrouping);
            
            #line default
            #line hidden
            return;
            case 2:
            this.Filtering = ((System.Windows.Controls.CheckBox)(target));
            
            #line 59 "..\..\MainWindow.xaml"
            this.Filtering.Checked += new System.Windows.RoutedEventHandler(this.AddFiltering);
            
            #line default
            #line hidden
            
            #line 59 "..\..\MainWindow.xaml"
            this.Filtering.Unchecked += new System.Windows.RoutedEventHandler(this.RemoveFiltering);
            
            #line default
            #line hidden
            return;
            case 3:
            this.Sorting = ((System.Windows.Controls.CheckBox)(target));
            
            #line 64 "..\..\MainWindow.xaml"
            this.Sorting.Checked += new System.Windows.RoutedEventHandler(this.AddSorting);
            
            #line default
            #line hidden
            
            #line 64 "..\..\MainWindow.xaml"
            this.Sorting.Unchecked += new System.Windows.RoutedEventHandler(this.RemoveSorting);
            
            #line default
            #line hidden
            return;
            case 4:
            this.Master = ((System.Windows.Controls.ListBox)(target));
            return;
            case 5:
            this.Detail = ((System.Windows.Controls.ContentControl)(target));
            return;
            case 6:
            this.OpenAddProduct = ((System.Windows.Controls.Button)(target));
            
            #line 85 "..\..\MainWindow.xaml"
            this.OpenAddProduct.Click += new System.Windows.RoutedEventHandler(this.OpenAddProductWindow);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}

