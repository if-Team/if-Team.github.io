var Member = React.createClass({
    propTypes: {
        naver: React.PropTypes.string.isRequired,
        naverId: React.PropTypes.string.isRequired,

        github: React.PropTypes.string,
        githubId: React.PropTypes.string,

        grade: React.PropTypes.string
    },

    render: function() {
        return <div className="member chip">
            <img src={this.props.githubId ? `https://avatars2.githubusercontent.com/u/${this.props.githubId}?v=3&s=50` : `resources/img/mk_icon.png`} />
            <span className="member title tooltipped" data-position="bottom" data-delay="50" data-tooltip={this.props.naverId}>{this.props.naver}</span>
            <span className="member github"><a href={'https://github.com/' + this.props.github}>{this.props.github && ('@' + this.props.github)}</a></span>
            <span className="member grade light-blue-text text-darken-3">{this.props.grade}</span>
        </div>;
    }
});

var MemberList = React.createClass({
    render: function(){
        return <ul className="members">
            <Member github="ChalkPE"       githubId="9481405"  grade="Leader" naverId="amato17"      naver="Chalk" />
            <Member github="MuhunKim"      githubId:"5278201"  grade=""       naverId="BetaFish"     naver="BetaFish" />
            <Member github="CirclePE"      githubId="10684388" grade=""       naverId="lwh8762"      naver="Circle" />
            <Member github="cr0sh"         githubId="13118114" grade=""       naverId="ska827"       naver="Cr0sh" />
            <Member github="angello10"     githubId="9531062"  grade=""       naverId="angello10"    naver="Dark" />
            <Member github="DeBe0"         githubId="13284800" grade=""       naverId="hustlerhlk"   naver="DeBe" />
            <Member github="Flaplim"       githubId="6704921"  grade=""       naverId="gptj1224"     naver= "Flaplim" />
            <Member github="HelloWorld017" githubId="3919433"  grade=""       naverId="deu07115"     naver="Khinenw" />
            <Member github="Khoneki"       githubId="9482404"  grade=""       naverId="woni8708"     naver="Khoneki" />
            <Member github="Semteul"       githubId="6727533"  grade="Staff"  naverId="b_science"    naver="SemteulGaram" />
            <Member github="HmHmmHm"       githubId="8337568"  grade="Staff"  naverId="hmkuak"       naver="hm" />
            <Member github="milk0417"      githubId="9590938"  grade=""       naverId="nno88551"     naver="SW승원" />
            <Member github="You726"        githubId="5254268"  grade=""       naverId="cksdid726"    naver="You" />
            <Member github="Duduzzing"     githubId="10470392" grade=""       naverId="enenwld80605" naver="두두찡" />
            <Member github="BloodType-AB"  githubId="11348711" grade="Staff"  naverId="ehddnjs9719"  naver="멸종위기의 AB형" />
            <Member github="onebone"       githubId="3233503"  grade="Staff"  naverId="jyc0410"      naver="원본" />
            <Member github=""              githubId=""         grade=""       naverId="twjun0212"    naver="조합자" />
            <Member github="Hanarin"       githubId="6566972"  grade="Staff"  naverId="canghaun"     naver="하나린" />
        </ul>;
    }
});

ReactDOM.render(
    <MemberList />,
    document.getElementById('members-view')
);
